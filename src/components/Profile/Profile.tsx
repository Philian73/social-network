import React, {FC} from 'react'

// import s from './Profile.module.css'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {ProfilePageType} from '../../state/state'

type PropsType = {
   state: ProfilePageType
}
export const Profile: FC<PropsType> = ({state}) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={state.posts} />
      </div>
   )
}