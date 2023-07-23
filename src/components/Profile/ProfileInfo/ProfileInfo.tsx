import { FC } from 'react'

import userPhoto from 'assets/images/user.png'

import { ProfileType } from 'redux/types'

import { Preloader } from 'components/common/Preloader/Preloader'
import { ProfileStatus } from './ProfileStatus/ProfileStatus'

import s from './ProfileInfo.module.css'
import { Dispatch } from 'redux'

type PropsType = {
   profile: ProfileType | null
   status: string
   updateStatus: (status: (string)) => (dispatch: Dispatch) => void
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
            <ProfileStatus status={status} />
         </div>
      </div>
   )
}