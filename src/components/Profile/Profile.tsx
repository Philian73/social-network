import React from 'react'

// import s from './Profile.module.css'

import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { PostsContainer } from './Posts/PostsContainer'


export const Profile = () => {
   return (
      <div>
         <ProfileInfo />
         <PostsContainer />
      </div>
   )
}