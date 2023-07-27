import { createSelector } from 'reselect'

import { AppStateType } from 'redux/store'

const getUsersPage = (state: AppStateType) => state.usersPage

export const usersSelectors = {
   getUsers: createSelector(getUsersPage, usersPage => usersPage.users),
   getPageSize: createSelector(getUsersPage, usersPage => usersPage.pageSize),
   getTotalUsersCount: createSelector(getUsersPage, usersPage => usersPage.totalUsersCount),
   getCurrentPage: createSelector(getUsersPage, usersPage => usersPage.currentPage),
   getIsFetching: createSelector(getUsersPage, usersPage => usersPage.isFetching),
   getFollowingInProgress: createSelector(getUsersPage, usersPage => usersPage.followingInProgress),
}