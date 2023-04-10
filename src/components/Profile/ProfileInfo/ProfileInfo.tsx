import React from 'react'
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
         </div>
         <div className={s.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}