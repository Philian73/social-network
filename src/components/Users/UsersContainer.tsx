import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/usersReducer'

import { Users } from './Users'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersAPIContainer extends Component<UsersPropsType> {
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
      return (
         <Users users={users}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                follow={follow}
                unfollow={unfollow}
         />
      )
   }
}

const mapStateToProps = (state: AppStateType) => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
})

export const UsersContainer = connect(mapStateToProps, { ...actions })(UsersAPIContainer)