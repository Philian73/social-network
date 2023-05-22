import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

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
         const onUnfollow = () => unfollow(user.id)
         const onFollow = () => follow(user.id)

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