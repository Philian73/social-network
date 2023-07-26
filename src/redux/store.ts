import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import { reducer as formReducer } from 'redux-form'

import { profileReducer } from 'redux/reducers/profileReducer'
import { messagesReducer } from 'redux/reducers/messagesReducer'
import { usersReducer } from 'redux/reducers/usersReducer'
import { AuthReducer } from 'redux/reducers/authReducer'
import { appReducer } from 'redux/reducers/appReducer'

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

const rootReducer = combineReducers({
   app: appReducer,
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   usersPage: usersReducer,
   auth: AuthReducer,
   form: formReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))