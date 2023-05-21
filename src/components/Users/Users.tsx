import React, { FC } from 'react'
import axios from 'axios'

import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

import { UsersPropsType } from './UsersContainer'

export const Users: FC<UsersPropsType> = ({ users, setUsers, follow, unfollow }) => {
   const getUsers = () => {
      !users.length && axios
         .get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            setUsers(response.data.items)
         })
   }

   const usersMap = users.map(user => {
      const onUnfollow = () => unfollow(user.id)
      const onFollow = () => follow(user.id)

      return (
         <div key={user.id}>
            <div>
               <img src={user.photos.small ? user.photos.small : userPhoto} alt={`Avatar of ${user.name}`}
                    className={s.userPhoto} />
            </div>
            <div>
               {user.followed ? (
                  <button onClick={onUnfollow}>Unfollow</button>
               ) : (
                  <button onClick={onFollow}>follow</button>
               )}
            </div>
            <div>
               <div>
                  <p>{user.name}</p>
                  <p>{user.status}</p>
               </div>
               <div>
                  <p>{'user.location.country'}</p>
                  <p>{'user.location.city'}</p>
               </div>
            </div>
         </div>
      )
   })

   return (
      <div>
         <button onClick={getUsers}>Get Users</button>
         {usersMap}
      </div>
   )
}