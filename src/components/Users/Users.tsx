import React, { Component } from 'react'
import axios from 'axios'

import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

import { UsersPropsType } from './UsersContainer'

export class Users extends Component<UsersPropsType> {
   componentDidMount() {
      const { pageSize, currentPage, setUsers, setTotalUsersCount } = this.props

      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            setUsers(response.data.items)
            setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      const { pageSize, setUsers, setCurrentPage } = this.props

      setCurrentPage(pageNumber)

      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            setUsers(response.data.items)
         })
   }

   render() {
      const { users, pageSize, totalUsersCount, currentPage, follow, unfollow } = this.props

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
         const onClick = () => this.onPageChanged(page)

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
                  <img src={srcImg}
                       alt={`Avatar of ${user.name}`}
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
            <div>
               {pagesMap}
            </div>
            {usersMap}
         </div>
      )
   }
}