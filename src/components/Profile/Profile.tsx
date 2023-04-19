import React, {FC} from 'react'

// import s from './Profile.module.css'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {ProfilePageType} from '../../redux/state'

type PropsType = {
   profilePage: ProfilePageType
   addPost: (postMessage: string) => void
}
export const Profile: FC<PropsType> = ({profilePage, addPost}) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={profilePage.posts} addPost={addPost} />
      </div>
   )
}