import {combineReducers, createStore} from 'redux'

import {ProfileActionsType, profileReducer} from './profileReducer'
import {MessagesActionsType, messagesReducer} from './messagesReducer'
import {sidebarReducer} from './sidebarReducer'

export type ActionsType = ProfileActionsType | MessagesActionsType

export type StoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   sidebar: sidebarReducer,
})

export const store = createStore(rootReducer)