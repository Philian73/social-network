export type ProfileActionsType =
   ReturnType<typeof updateNewPostTextAC>
   | ReturnType<typeof addPostAC>

export type PostType = {
   id: number
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: PostType[]
   newPostText: string
}

const initialState: ProfilePageType = {
   posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 15},
      {id: 2, message: 'It\'s my first post', likesCount: 20},
   ],
   newPostText: '',
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageType => {
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