import React from 'react'

import { StoreContext } from '../../../StoreContext'

import { actions } from '../../../redux/profileReducer'

import { Posts } from './Posts'

export const PostsContainer = () => (
   <StoreContext.Consumer>
      {store => {
         const state = store.getState().profilePage

         const updateNewPostText = (text: string) => store.dispatch(actions.updateNewPostTextAC(text))
         const addPost = () => store.dispatch(actions.addPostAC())

         return (
            <Posts posts={state.posts}
                   newPostText={state.newPostText}
                   updateNewPostText={updateNewPostText}
                   addPost={addPost}
            />
         )
      }}
   </StoreContext.Consumer>
)