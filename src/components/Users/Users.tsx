import React, { FC } from 'react'

import s from './Users.module.css'

import { UsersPropsType } from './UsersContainer'

export const Users: FC<UsersPropsType> = ({ users, setUsers, follow, unfollow }) => {
   !users.length && setUsers([
      {
         id: 1,
         photoUrl: 'https://images-ext-1.discordapp.net/external/jJchc9pFZ66WKw2Sstrep8vckFezHSpoyiokP2XADM0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/290912033623244800/6097c9a2a483703bec3d0f2cd9a3566f.png',
         followed: false,
         fullName: 'Nikolay',
         status: 'I\'m the boss',
         location: {
            country: 'Russia',
            city: 'Ulyanovsk',
         },
      },
      {
         id: 2,
         photoUrl: 'https://images-ext-1.discordapp.net/external/jJchc9pFZ66WKw2Sstrep8vckFezHSpoyiokP2XADM0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/290912033623244800/6097c9a2a483703bec3d0f2cd9a3566f.png',
         followed: true,
         fullName: 'Darya',
         status: 'I\'m the boss girl',
         location: {
            country: 'Russia',
            city: 'Ulyanovsk',
         },
      },
      {
         id: 3,
         photoUrl: 'https://images-ext-1.discordapp.net/external/jJchc9pFZ66WKw2Sstrep8vckFezHSpoyiokP2XADM0/%3Fsize%3D512/https/cdn.discordapp.com/avatars/290912033623244800/6097c9a2a483703bec3d0f2cd9a3566f.png',
         followed: true,
         fullName: 'Nikita',
         status: 'I\'m a friend of the boss',
         location: {
            country: 'Russia',
            city: 'Saint Petersburg',
         },
      },
   ])

   const usersMap = users.map(user => {
      const onUnfollow = () => unfollow(user.id)
      const onFollow = () => follow(user.id)

      return (
         <div key={user.id}>
            <div>
               <img src={user.photoUrl} alt={`Avatar of ${user.fullName}`} className={s.userPhoto} />
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
                  <p>{user.fullName}</p>
                  <p>{user.status}</p>
               </div>
               <div>
                  <p>{user.location.country}</p>
                  <p>{user.location.city}</p>
               </div>
            </div>
         </div>
      )
   })

   return <div>{usersMap}</div>
}