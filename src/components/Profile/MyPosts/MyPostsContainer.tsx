import React from 'react'

import {StoreContext} from '../../../StoreContext'

import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer'

import {MyPosts} from './MyPosts'

export const MyPostsContainer = () => (
   <StoreContext.Consumer>
      {store => {
         const state = store.getState().profilePage

         const updateNewPostText = (text: string) => store.dispatch(updateNewPostTextAC(text))
         const addPost = () => store.dispatch(addPostAC())

         return (
            <MyPosts posts={state.posts}
                     newPostText={state.newPostText}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost}
            />
         )
      }}
   </StoreContext.Consumer>
)