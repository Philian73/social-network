import React from 'react'
import s from './Post.module.css'

export const Post: React.FC = () => {
   return (
      <div className={s.item}>
         <img src="https://lh3.googleusercontent.com/a/AGNmyxaFGi9-aUy1jbhPeCLVuw_DdtgJUCuv0c3ypH9uQA=s288"
              alt="avatar" />
         post1
         <div>like</div>
      </div>
   )
}