import { Dispatch } from 'redux'

import { authAPI } from '../api/authAPI'
import { InferActionTypes } from './store'

type ActionsType = InferActionTypes<typeof actions>

type InitialStateType = typeof initialState

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
            ...action.payload.data,
            isAuth: true
         }
      default:
         return state
   }
}

export const actions = {
   setAuthUserData: (id: number, email: string, login: string) => ({
      type: 'SET-AUTH-USER-DATA',
      payload: {
         data: { id, email, login }
      }
   } as const)
}

export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
      authAPI.me()
         .then(response => {
            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data
               dispatch(actions.setAuthUserData(id, email, login))
            }
         })
   }
}