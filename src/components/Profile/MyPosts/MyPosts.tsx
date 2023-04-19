import React, {createRef, FC} from 'react'

import s from './MyPosts.module.css'

import {Post} from './Post/Post'

import {PostType} from '../../../redux/state'

type PropsType = {
   posts: PostType[]
}
export const MyPosts: FC<PropsType> = ({posts}) => {
   const newPostEl = createRef<HTMLTextAreaElement>()

   const addPostHandler = () => {
      alert(newPostEl.current?.value)
   }

   const postsMap = posts
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostEl}></textarea>
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