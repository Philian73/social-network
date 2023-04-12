import React, {FC} from 'react'

// import s from './Profile.module.css'

import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'

import {PostType} from '../../store'

type PropsType = {
   posts: PostType[]
}
export const Profile: FC<PropsType> = ({posts}) => {


   return (
      <div>
         <ProfileInfo />
         <MyPosts posts={posts} />
      </div>
   )
}