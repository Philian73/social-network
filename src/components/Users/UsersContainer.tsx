import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { actions, follow, getUsers, unfollow } from 'redux/reducers/usersReducer'

import { Preloader } from 'components/common/Preloader/Preloader'
import { Users } from './Users'
import { withAuthRedirect } from 'hoc/withAuthRedirect'

class UsersAPIContainer extends Component<UsersPropsType> {
   componentDidMount() {
      const { pageSize, currentPage, getUsers } = this.props

      getUsers(currentPage, pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      const { pageSize, getUsers } = this.props

      getUsers(pageNumber, pageSize)
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
            />
         </>
      )
   }
}

// const mapStateToProps = (state: AppStateType) => ({
//    users: state.usersPage.users,
//    pageSize: state.usersPage.pageSize,
//    totalUsersCount: state.usersPage.totalUsersCount,
//    currentPage: state.usersPage.currentPage,
//    isFetching: state.usersPage.isFetching,
//    followingInProgress: state.usersPage.followingInProgress,
// })

const mapStateToProps = (state: AppStateType) => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
   isFetching: state.usersPage.isFetching,
   followingInProgress: state.usersPage.followingInProgress,
})

export const UsersContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...actions, getUsers, unfollow, follow }),
)(UsersAPIContainer)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & { getUsers: any, follow: any, unfollow: any }

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType