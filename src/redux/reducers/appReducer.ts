import { AppThunkType, InferActionTypes } from 'redux/store'
import { authThunks } from 'redux/reducers/authReducer'

const initialState = {
   isInitialized: false
}

export const appReducer = (state = initialState, action: ActionsType): AppInitialStateType => {
   switch (action.type) {
      case 'APP/SET-IS-INITIALIZED':
         return { ...state, isInitialized: action.payload.isInitialized }
      default:
         return state
   }
}

export const appActions = {
   setAppInitialized(isInitialized: boolean) {
      return {
         type: 'APP/SET-IS-INITIALIZED',
         payload: { isInitialized }
      } as const
   },
}

export const appThunks = {
   initialization: (): AppThunkType => {
      return dispatch => {
         const promise = dispatch(authThunks.getAuthUserData())

         Promise.all([promise]).then(() => {
            dispatch(appActions.setAppInitialized(true))
         })
      }
   }
}

// TYPES
type AppInitialStateType = typeof initialState

type ActionsType = InferActionTypes<typeof appActions>
