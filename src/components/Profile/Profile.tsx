import { FC } from 'react'

// import s from './Profile.module.css'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { PostsContainer } from './Posts/PostsContainer'
import { ProfilePropsType } from './ProfileContainer'


export const Profile: FC<ProfilePropsType> = ({ profile, status, updateStatus }) => {
   return (
      <div>
         <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
         <PostsContainer />
      </div>
   )
}