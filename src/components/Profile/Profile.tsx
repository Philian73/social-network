import React from 'react'
import s from './Profile.module.css'

export const Profile: React.FC = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
         </div>
         <div>
            ava + description
         </div>
         <div>
            My posts
            <div>
               New post
            </div>
            <div className={s.posts}>
               <div className={s.item}>
                  post1
               </div>
               <div className={s.item}>
                  post2
               </div>
            </div>
         </div>
      </div>
   )
}