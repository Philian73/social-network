import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'

export const Profile: React.FC = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   )
}