import React, { FC } from 'react'

import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'

import { ProfileType } from '../../../redux/types'

import { Preloader } from '../../common/Preloader/Preloader'

type PropsType = {
   profile: ProfileType | null
}
export const ProfileInfo: FC<PropsType> = ({ profile }) => {
   return !profile ? (
      <Preloader />
   ) : (
      <div>
         <div>
            <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
         </div>
         <div className={s.descriptionBlock}>
            <img src={profile.photos.large ? profile.photos.large : userPhoto} alt={`Avator of ${profile.fullName}`} />
            <p>{profile.lookingForAJobDescription}</p>
         </div>
      </div>
   )
}