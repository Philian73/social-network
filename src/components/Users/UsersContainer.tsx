import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { actions, follow, getUsers, unfollow } from 'redux/reducers/usersReducer'
import { usersSelectors } from 'redux/selectors/usersSelectors'

import { Preloader } from 'components/common/Preloader/Preloader'
import { Users } from './Users'

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

const mapStateToProps = (state: AppStateType) => {
   const {
      getUsers,
      getPageSize,
      getTotalUsersCount,
      getCurrentPage,
      getIsFetching,
      getFollowingInProgress
   } = usersSelectors

   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}

export const UsersContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...actions, getUsers, unfollow, follow }),
)(UsersAPIContainer)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & { getUsers: any, follow: any, unfollow: any }

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType