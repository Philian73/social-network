import { ChangeEvent, FC } from 'react'

import { PostsPropsType } from './PostsContainer'

import { Post } from './Post/Post'

import s from './Posts.module.css'

export const Posts: FC<PostsPropsType> = ({ posts, newPostText, updateNewPostText, addPost }) => {
   const onNewPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => updateNewPostText(e.currentTarget.value)
   const onAddPost = () => addPost()

   const postsMap = posts
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onNewPostTextChange} value={newPostText} />
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsMap}
         </div>
      </div>
   )
}