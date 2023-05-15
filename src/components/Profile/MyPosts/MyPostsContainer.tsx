import React, {FC} from 'react'

import {StoreType} from '../../../redux/store'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer'

import {MyPosts} from './MyPosts'

type PropsType = {
   store: StoreType
}
export const MyPostsContainer: FC<PropsType> = ({store}) => {
   const state = store.getState().profilePage

   const updateNewPostText = (text: string) => {
      store.dispatch(updateNewPostTextAC(text))
   }
   const addPost = () => {
      store.dispatch(addPostAC())
   }

   return (
      <MyPosts posts={state.posts}
               newPostText={state.newPostText}
               updateNewPostText={updateNewPostText}
               addPost={addPost}
      />
   )
}