import React, {FC} from 'react'

// import s from './Profile.module.css'

import {ActionsType} from '../../redux/store'
import {ProfilePageType} from '../../redux/profileReducer'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

type PropsType = {
   profilePage: ProfilePageType
   dispatch: (action: ActionsType) => void
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