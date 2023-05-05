import React, {ChangeEvent, FC} from 'react'

import s from './MyPosts.module.css'

import {Post} from './Post/Post'

import {ActionsTypes, PostType} from '../../../redux/state'

type PropsType = {
   posts: PostType[]
   newPostText: string
   dispatch: (action: ActionsTypes) => void
}
export const MyPosts: FC<PropsType> = ({posts, newPostText, dispatch}) => {
   const addPostHandler = () => {
      dispatch({type: 'ADD-POST'})
   }

   const newPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
   }

   const postsMap = posts
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={newPostTextChangeHandler} value={newPostText} />
            </div>
            <div>
               <button onClick={addPostHandler}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsMap}
         </div>
      </div>
   )
}