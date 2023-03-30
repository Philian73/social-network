import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
   message: string
   likesCount?: number
}
export const Post: React.FC<PostPropsType> = props => {
   return (
      <div className={s.item}>
         <img src="https://lh3.googleusercontent.com/a/AGNmyxaFGi9-aUy1jbhPeCLVuw_DdtgJUCuv0c3ypH9uQA=s288"
              alt="avatar" />
         {props.message}
         <div>
            <span>like </span><span>{props.likesCount}</span>
         </div>
      </div>
   )
}