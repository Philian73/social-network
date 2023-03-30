import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts: React.FC = () => {
   return (
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={s.posts}>
            <Post message="Hi, how are you?" likeCounts={15} />
            <Post message="It's my first post" likeCounts={20} />
         </div>
      </div>
   )
}