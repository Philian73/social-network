import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { profileReducer } from './profileReducer'
import { messagesReducer } from './messagesReducer'
import { usersReducer } from './usersReducer'
import { AuthReducer } from './authReducer'

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   usersPage: usersReducer,
   auth: AuthReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))