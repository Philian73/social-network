import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

import { usersAPI } from '../../api/usersAPI'

import { UserType } from '../../redux/types'

type PropsType = {
   users: UserType[]
   pageSize: number
   totalUsersCount: number
   currentPage: number
   followingInProgress: number[]
   onPageChanged: (pageNumber: number) => void
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   toggleFollowingInProgress: (userID: number, isFetching: boolean) => void
}
export const Users: FC<PropsType> =
   ({
       users,
       pageSize,
       totalUsersCount,
       currentPage,
       followingInProgress,
       onPageChanged,
       follow,
       unfollow,
       toggleFollowingInProgress,
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
            toggleFollowingInProgress(user.id, true)

            usersAPI.unfollow(user.id)
               .then(data => {
                  if (data.resultCode === 0) {
                     unfollow(user.id)
                  }

                  toggleFollowingInProgress(user.id, false)
               })
         }
         const onFollow = () => {
            toggleFollowingInProgress(user.id, true)

            usersAPI.follow(user.id)
               .then(data => {
                  if (data.resultCode === 0) {
                     follow(user.id)
                  }

                  toggleFollowingInProgress(user.id, false)
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
                     <button disabled={followingInProgress.includes(user.id)}
                             onClick={onUnfollow}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button disabled={followingInProgress.includes(user.id)}
                             onClick={onFollow}
                     >
                        follow
                     </button>
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