import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { usersActions, usersThunks } from 'redux/reducers/usersReducer'
import { usersSelectors } from 'redux/selectors/usersSelectors'

import { Preloader } from 'components/common/Preloader/Preloader'
import { Users } from './Users'

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

const MapDispatchToProps = {
   ...usersActions,
   ...usersThunks,
}

export const UsersContainer = compose<ComponentType>(
   connect(mapStateToProps, MapDispatchToProps),
)(class extends Component<UsersPropsType> {
   componentDidMount() {
      const { pageSize, currentPage, fetchUsers } = this.props

      fetchUsers(currentPage, pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      const { pageSize, fetchUsers } = this.props

      fetchUsers(pageNumber, pageSize)
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
})


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof MapDispatchToProps

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType