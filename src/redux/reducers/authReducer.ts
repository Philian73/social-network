import { stopSubmit } from 'redux-form'

import { APIResultCodes } from 'api/api'
import { authAPI, LoginParamsType } from 'api/authAPI'

import { AppThunkType, InferActionTypes } from 'redux/store'

const initialState = {
   id: null as (number | null),
   email: null as (string | null),
   login: null as (string | null),
   isAuth: false,
}

export const AuthReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'SET-AUTH-USER-DATA':
         return {
            ...state,
            ...action.payload
         }
      default:
         return state
   }
}

export const authActions = {
   setAuthUserData: (id: number | null, email: null | string, login: null | string, isAuth: boolean) => ({
      type: 'SET-AUTH-USER-DATA',
      payload: { id, email, login, isAuth }
   } as const)
}

export const authThunks = {
   getAuthUserData(): AppThunkType<Promise<void>> {
      return dispatch => {
         return authAPI.me()
            .then(response => {
               if (response.data.resultCode === 0) {
                  const { id, login, email } = response.data.data
                  dispatch(authActions.setAuthUserData(id, email, login, true))
               }
            })
      }
   },
   logIn(data: LoginParamsType): AppThunkType {
      return dispatch => {
         authAPI.logIn(data)
            .then(response => {
               if (response.data.resultCode === APIResultCodes.SUCCESS) {
                  dispatch(authThunks.getAuthUserData())
               } else {
                  const message = response.data.messages.length ? response.data.messages[0] : 'Some error'

                  dispatch(stopSubmit('login', { _error: message }))
               }
            })
      }
   },
   logOut(): AppThunkType {
      return dispatch => {
         authAPI.logOut()
            .then(response => {
               if (response.data.resultCode === APIResultCodes.SUCCESS) {
                  dispatch(authActions.setAuthUserData(null, null, null, false))
               }
            })
      }
   },
}


// TYPES
type ActionsType = InferActionTypes<typeof authActions>

type InitialStateType = typeof initialState