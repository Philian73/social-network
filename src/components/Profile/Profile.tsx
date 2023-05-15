import React, {FC} from 'react'

// import s from './Profile.module.css'

import {StoreType} from '../../redux/store'

import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'

type PropsType = {
   store: StoreType
}
export const Profile: FC<PropsType> = ({store}) => {
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer store={store} />
      </div>
   )
}