import React, { Component } from 'react'
import { connect } from 'react-redux'

import { usersAPI } from '../../api/usersAPI'

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

      usersAPI.getUsers(currentPage, pageSize)
         .then(data => {
            toggleIsFetching(false)
            setUsers(data.items)
            setTotalUsersCount(data.totalCount)
         })
   }

   onPageChanged = (pageNumber: number) => {
      const { pageSize, setUsers, setCurrentPage, toggleIsFetching } = this.props

      toggleIsFetching(true)

      setCurrentPage(pageNumber)

      usersAPI.getUsers(pageNumber, pageSize)
         .then(data => {
            toggleIsFetching(false)
            setUsers(data.items)
         })
   }

   render() {
      const {
         users,
         pageSize,
         totalUsersCount,
         currentPage,
         isFetching,
         followingInProgress,
         follow,
         unfollow,
         toggleFollowingInProgress,
      } = this.props
      return (
         <>
            {isFetching ? <Preloader /> : null}
            <Users users={users}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   currentPage={currentPage}
                   followingInProgress={followingInProgress}
                   onPageChanged={this.onPageChanged}
                   follow={follow}
                   unfollow={unfollow}
                   toggleFollowingInProgress={toggleFollowingInProgress}
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
   followingInProgress: state.usersPage.followingInProgress,
})

export const UsersContainer = connect(mapStateToProps, { ...actions })(UsersAPIContainer)