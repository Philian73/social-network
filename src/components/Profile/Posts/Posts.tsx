import { FC, memo } from 'react'

import { PostsPropsType } from './PostsContainer'
import { Post } from './Post/Post'
import { AddPostFormData, AddPostReduxForm } from 'components/Profile/Posts/AddPostForm/AddPostForm'

import s from './Posts.module.css'


export const Posts: FC<PostsPropsType> = memo(({ posts, addPost }) => {
   const addNewPost = (formData: AddPostFormData) => {
      addPost(formData.newPostText)
   }

   const postsMap = posts
      .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <AddPostReduxForm onSubmit={addNewPost} />
         <div className={s.posts}>
            {postsMap}
         </div>
      </div>
   )
})