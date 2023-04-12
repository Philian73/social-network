import React, {FC} from 'react'

import s from './MyPosts.module.css'

import {Post} from './Post/Post'

import {PostType} from '../../../state'

type PropsType = {
   posts: PostType[]
}
export const MyPosts: FC<PropsType> = ({posts}) => {
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