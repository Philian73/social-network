import { InferActionTypes } from './store'

type ActionsType = InferActionTypes<typeof actions>

type PostType = {
   id: number
   message: string
   likesCount: number
}

type InitialStateType = typeof initialState

const initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
   ] as PostType[],
   newPostText: '',
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'UPDATE-NEW-POST-TEXT': {
         state.newPostText = action.payload.newText
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

export const actions = {
   updateNewPostText: (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', payload: { newText: text } } as const),
   addPost: () => ({ type: 'ADD-POST' } as const)
}