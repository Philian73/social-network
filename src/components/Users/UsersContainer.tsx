import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/usersReducer'

import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersAPIContainer extends Component<UsersPropsType> {
   componentDidMount() {
      const { pageSize, currentPage, setUsers, setTotalUsersCount, toggleIsFetching } = this.props
      toggleIsFetching(true)
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            toggleIsFetching(false)
            setUsers(response.data.items)
            setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      const { pageSize, setUsers, setCurrentPage, toggleIsFetching } = this.props

      toggleIsFetching(true)

      setCurrentPage(pageNumber)

      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
         .then(response => {
            toggleIsFetching(false)
            setUsers(response.data.items)
         })
   }

   render() {
      const { users, pageSize, totalUsersCount, currentPage, isFetching, follow, unfollow } = this.props
      return (
         <>
            {isFetching ? <Preloader /> : null}
            <Users users={users}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   currentPage={currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={follow}
                   unfollow={unfollow}
            />
         </>
      )
   }
}

const mapStateToProps = (state: AppStateType) => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
   isFetching: state.usersPage.isFetching,
})

export const UsersContainer = connect(mapStateToProps, { ...actions })(UsersAPIContainer)