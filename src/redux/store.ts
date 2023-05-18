import { combineReducers, createStore } from 'redux'

import { profileReducer } from './profileReducer'
import { messagesReducer } from './messagesReducer'
import { sidebarReducer } from './sidebarReducer'

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type StoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   sidebar: sidebarReducer,
})

export const store = createStore(rootReducer)