import { FC } from 'react'

import userPhoto from 'assets/images/user.png'

import { ProfileType } from 'redux/types'

import { Preloader } from 'components/common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

import s from './ProfileInfo.module.css'
import { UpdateStatusType } from 'redux/profileReducer'

type PropsType = {
   profile: ProfileType | null
   status: string
   updateStatus: UpdateStatusType
}
export const ProfileInfo: FC<PropsType> = ({ profile, status, updateStatus }) => {
   return !profile ? (
      <Preloader />
   ) : (
      <div>
         <div>
            <img src="https://i.ibb.co/CQyysgB/pexels-photo-248797.jpg" alt="wallpaper" />
         </div>
         <div className={s.descriptionBlock}>
            <img src={profile.photos.large ? profile.photos.large : userPhoto} alt={`Avator of ${profile.fullName}`} />
            <ProfileStatus status={status} updateStatus={updateStatus} />
         </div>
      </div>
   )
}