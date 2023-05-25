import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { API_KEY } from '../../api/API_KEY'

import { UserType } from '../../redux/types'

type PropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   follow: (userID: number) => void
   unfollow: (userID: number) => void
}
export const Users: FC<PropsType> =
   ({
       users,
       pageSize,
       totalUsersCount,
       currentPage,
       onPageChanged,
       follow,
       unfollow
    }) => {
      const pagesCount = Math.ceil(totalUsersCount / pageSize)
      const pages = []

      for (let i = 1; i <= pagesCount; i++) pages.push(i)

      let slicedPages

      if (currentPage - 3 < 0) {
         slicedPages = pages.slice(0, 5)
      } else {
         slicedPages = pages.slice(currentPage - 3, currentPage + 2)
      }

      const pagesMap = slicedPages.map(page => {
         const onClick = () => onPageChanged(page)

         const currentPageClasses = page === currentPage ? s.selectedPage : undefined

         return (
            <span key={page} className={currentPageClasses} onClick={onClick}>
               -{page}-
            </span>
         )
      })
      const usersMap = users.map(user => {
         const onUnfollow = () => {
            axios
               .delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                     'API-KEY': API_KEY,
                  },
               })
               .then(response => {
                  if (response.data.resultCode === 0) {
                     unfollow(user.id)
                  }
               })
         }
         const onFollow = () => {
            axios
               .post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                     'API-KEY': API_KEY,
                  },
               })
               .then(response => {
                  if (response.data.resultCode === 0) {
                     follow(user.id)
                  }
               })
         }

         const srcImg = user.photos.small ? user.photos.small : userPhoto

         return (
            <div key={user.id}>
               <div>
                  <NavLink to={`/profile/${user.id}`}>
                     <img src={srcImg}
                          alt={`Avatar of ${user.name}`}
                          className={s.userPhoto} />
                  </NavLink>
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
            <div>
               {pagesMap}
            </div>
            {usersMap}
         </div>
      )
   }