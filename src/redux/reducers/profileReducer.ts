import { InferActionTypes } from 'redux/store'
import { PostType, ProfileType } from 'redux/types'
import { Dispatch } from 'redux'
import { profileAPI } from 'api/profileAPI'
import { APIResultCodes } from 'api/api'

const initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
   ] as PostType[],
   profile: null as ProfileType | null,
   status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'ADD-POST':
         if (action.payload.newPostText.trim()) {
            return {
               ...state,
               posts: [...state.posts, {
                  id: state.posts.length + 1,
                  message: action.payload.newPostText,
                  likesCount: 0
               }],
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
   addPost: (newPostText: string) => ({ type: 'ADD-POST', payload: { newPostText } } as const),
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

type ActionsType = InferActionTypes<typeof actions>

type InitialStateType = typeof initialState

export type UpdateStatusType = typeof thunks['updateStatus']