import React, {ChangeEvent, FC} from 'react'

import s from './MyPosts.module.css'

import {Post} from './Post/Post'

import {PostType} from '../../../redux/state'

type PropsType = {
   posts: PostType[]
   newPostText: string
   updateNewPostText: (newText: string) => void
   addPost: () => void
}
export const MyPosts: FC<PropsType> = ({posts, newPostText, updateNewPostText, addPost}) => {
   const addPostHandler = () => {
      addPost()
   }

   const newPostTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateNewPostText(e.currentTarget.value)
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