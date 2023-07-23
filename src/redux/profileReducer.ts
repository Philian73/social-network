import { InferActionTypes } from './store'
import { PostType, ProfileType } from './types'
import { Dispatch } from 'redux'
import { profileAPI } from 'api/profileAPI'
import { APIResultCodes } from 'api/api'

type ActionsType = InferActionTypes<typeof actions>

type InitialStateType = typeof initialState

const initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
   ] as PostType[],
   newPostText: '',
   profile: null as ProfileType | null,
   status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'UPDATE-NEW-POST-TEXT':
         return { ...state, newPostText: action.payload.newText }
      case 'ADD-POST':
         if (state.newPostText.trim()) {
            return {
               ...state,
               posts: [...state.posts, { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }],
               newPostText: '',
            }
         } else {
            return state
         }
      case 'SET-USER-PROFILE':
         return { ...state, profile: action.payload.profile }
      case 'SET-STATUS':
         return { ...state, status: action.payload.status }
      default:
         return state
   }
}

export const actions = {
   updateNewPostText: (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', payload: { newText: text } } as const),
   addPost: () => ({ type: 'ADD-POST' } as const),
   setUserProfile: (profile: ProfileType) => ({ type: 'SET-USER-PROFILE', payload: { profile } } as const),
   setStatus: (status: string) => ({ type: 'SET-STATUS', payload: { status } } as const),
}

export const thunks = {
   getUserProfile(userID: number) {
      return (dispatch: Dispatch) => {
         profileAPI.getProfile(userID)
            .then(response => {
               dispatch(actions.setUserProfile(response.data))
            })
      }
   },
   getStatus(userID: number) {
      return (dispatch: Dispatch) => {
         profileAPI.getStatus(userID)
            .then(response => {
               dispatch(actions.setStatus(response.data))
            })
      }
   },
   updateStatus(status: string) {
      return (dispatch: Dispatch) => {
         profileAPI.updateStatus(status)
            .then(response => {
               if (response.data.resultCode === APIResultCodes.SUCCESS) {
                  dispatch(actions.setStatus(status))
               }
            })
      }
   },
}

