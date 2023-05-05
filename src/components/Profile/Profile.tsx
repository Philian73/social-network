import React, {FC} from 'react'

// import s from './Profile.module.css'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {ActionsTypes, ProfilePageType} from '../../redux/state'

type PropsType = {
   profilePage: ProfilePageType
   dispatch: (action: ActionsTypes) => void
}
export const Profile: FC<PropsType> = ({profilePage, dispatch}) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={profilePage.posts}
                  newPostText={profilePage.newPostText}
                  dispatch={dispatch}
         />
      </div>
   )
}