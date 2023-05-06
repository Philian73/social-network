import {ProfilePageType} from './state'

export type ProfileActionTypes =
   ReturnType<typeof updateNewPostTextAC>
   | ReturnType<typeof addPostAC>

export const profileReducer = (state: ProfilePageType, action: ProfileActionTypes): ProfilePageType => {
   switch (action.type) {
      case 'UPDATE-NEW-POST-TEXT': {
         state.newPostText = action.newText
         return state
      }
      case 'ADD-POST': {
         state.posts.push({
            id: state.posts.length + 1,
            message: state.newPostText,
            likesCount: 0,
         })
         state.newPostText = ''
         return state
      }
      default:
         return state
   }
}

export const updateNewPostTextAC = (text: string) => ({
   type: 'UPDATE-NEW-POST-TEXT',
   newText: text
}) as const

export const addPostAC = () => ({
   type: 'ADD-POST'
}) as const