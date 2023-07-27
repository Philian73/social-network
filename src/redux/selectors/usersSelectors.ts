import { createSelector } from 'reselect'

import { AppStateType } from 'redux/store'

const getUsers = (state: AppStateType) => state.usersPage.users

export const usersSelectors = {
   getUsers: createSelector(getUsers, users => users),
   getPageSize: (state: AppStateType) => state.usersPage.pageSize,
   getTotalUsersCount: (state: AppStateType) => state.usersPage.totalUsersCount,
   getCurrentPage: (state: AppStateType) => state.usersPage.currentPage,
   getIsFetching: (state: AppStateType) => state.usersPage.isFetching,
   getFollowingInProgress: (state: AppStateType) => state.usersPage.followingInProgress,
}