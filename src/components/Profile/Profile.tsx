import React, {FC} from 'react'

// import s from './Profile.module.css'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {ProfilePageType} from '../../redux/state'

type PropsType = {
   profilePage: ProfilePageType
   updateNewPostText: (newText: string) => void
   addPost: () => void
}
export const Profile: FC<PropsType> = ({profilePage, updateNewPostText, addPost}) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={profilePage.posts}
                  newPostText={profilePage.newPostText}
                  updateNewPostText={updateNewPostText}
                  addPost={addPost}
         />
      </div>
   )
}