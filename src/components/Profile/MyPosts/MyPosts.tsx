import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

type PostType = {
   id: number
   message: string
   likesCount: number
}

export const MyPosts = () => {
   const posts: PostType[] = [
      {id: 1, message: 'Hi, how are you?', likesCount: 15},
      {id: 2, message: 'It\'s my first post', likesCount: 20},
   ]

   const postsMap = posts
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsMap}
         </div>
      </div>
   )
}