import { FC } from 'react'

import s from './Post.module.css'

type PropsType = {
   message: string
   likesCount?: number
}
export const Post: FC<PropsType> = ({ message, likesCount }) => {
   return (
      <div className={s.item}>
         <img src="https://avatars.githubusercontent.com/u/69945902?s=100"
              alt="avatar" />
         {message}
         <div>
            <span>like </span><span>{likesCount}</span>
         </div>
      </div>
   )
}