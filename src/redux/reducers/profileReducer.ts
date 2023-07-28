import { APIResultCodes } from 'api/api'
import { profileAPI } from 'api/profileAPI'
import { PostType, ProfileType } from 'redux/types'
import { AppThunkType, InferActionTypes } from 'redux/store'


const initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
   ] as PostType[],
   profile: null as (ProfileType | null),
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

export const profileActions = {
   addPost: (newPostText: string) => ({ type: 'ADD-POST', payload: { newPostText } } as const),
   setUserProfile: (profile: ProfileType) => ({ type: 'SET-USER-PROFILE', payload: { profile } } as const),
   setStatus: (status: string) => ({ type: 'SET-STATUS', payload: { status } } as const),
}

export const profileThunks = {
   getUserProfile(userID: number): AppThunkType {
      return dispatch => {
         profileAPI.getProfile(userID)
            .then(response => {
               dispatch(profileActions.setUserProfile(response.data))
            })
      }
   },
   getStatus(userID: number): AppThunkType {
      return dispatch => {
         profileAPI.getStatus(userID)
            .then(response => {
               dispatch(profileActions.setStatus(response.data))
            })
      }
   },
   updateStatus(status: string): AppThunkType {
      return dispatch => {
         profileAPI.updateStatus(status)
            .then(response => {
               if (response.data.resultCode === APIResultCodes.SUCCESS) {
                  dispatch(profileActions.setStatus(status))
               }
            })
      }
   },
}

type ActionsType = InferActionTypes<typeof profileActions>

type InitialStateType = typeof initialState

export type UpdateStatusType = typeof profileThunks['updateStatus']