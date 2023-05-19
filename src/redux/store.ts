import { combineReducers, createStore } from 'redux'

import { profileReducer } from './profileReducer'
import { messagesReducer } from './messagesReducer'

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
})

export const store = createStore(rootReducer)