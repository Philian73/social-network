import { AppThunkType, InferActionTypes } from 'redux/store'
import { UserType } from 'redux/types'

import { usersAPI } from 'api/usersAPI'

const initialState = {
   users: [] as UserType[],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [] as number[],
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'SET-USERS':
         return { ...state, users: [...action.payload.users] }
      case 'SET-USERS-TOTAL-COUNT':
         return { ...state, totalUsersCount: action.payload.count }
      case 'SET-CURRENT-PAGE':
         return { ...state, currentPage: action.payload.currentPage }
      case 'FOLLOW':
         return {
            ...state,
            users: state.users.map(user => user.id === action.payload.userID ? { ...user, followed: true } : user)
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map(user => user.id === action.payload.userID ? { ...user, followed: false } : user)
         }
      case 'TOGGLE-IS-FETCHING':
         return { ...state, isFetching: action.payload.isFetching }
      case 'TOGGLE-FOLLOWING-IN-PROGRESS':
         return {
            ...state,
            followingInProgress: action.payload.isFetching
               ? [...state.followingInProgress, action.payload.userID]
               : state.followingInProgress.filter(id => id !== action.payload.userID)
         }
      default:
         return state
   }
}

export const usersActions = {
   setUsers: (users: UserType[]) => ({ type: 'SET-USERS', payload: { users } } as const),
   setTotalUsersCount: (count: number) => ({ type: 'SET-USERS-TOTAL-COUNT', payload: { count } } as const),
   setCurrentPage: (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', payload: { currentPage } } as const),
   followSuccess: (userID: number) => ({ type: 'FOLLOW', payload: { userID } } as const),
   unfollowSuccess: (userID: number) => ({ type: 'UNFOLLOW', payload: { userID } } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE-IS-FETCHING', payload: { isFetching } } as const),
   toggleFollowingInProgress: (userID: number, isFetching: boolean) => ({
      type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
      payload: { userID, isFetching }
   } as const),
}

export const usersThunks = {
   fetchUsers(page: number, pageSize: number): AppThunkType {
      return dispatch => {
         dispatch(usersActions.toggleIsFetching(true))
         dispatch(usersActions.setCurrentPage(page))
         
         usersAPI.getUsers(page, pageSize)
            .then(data => {
               dispatch(usersActions.toggleIsFetching(false))
               dispatch(usersActions.setUsers(data.items))
               dispatch(usersActions.setTotalUsersCount(data.totalCount))
            })
      }
   },
   follow(userID: number): AppThunkType {
      return dispatch => {
         dispatch(usersActions.toggleFollowingInProgress(userID, true))

         usersAPI.follow(userID)
            .then(data => {
               if (data.resultCode === 0) {
                  dispatch(usersActions.followSuccess(userID))
               }

               dispatch(usersActions.toggleFollowingInProgress(userID, false))
            })
      }
   },
   unfollow(userID: number): AppThunkType {
      return dispatch => {
         dispatch(usersActions.toggleFollowingInProgress(userID, true))

         usersAPI.unfollow(userID)
            .then(data => {
               if (data.resultCode === 0) {
                  dispatch(usersActions.unfollowSuccess(userID))
               }

               dispatch(usersActions.toggleFollowingInProgress(userID, false))
            })
      }
   },
}

// TYPES
type InitialStateType = typeof initialState

type ActionsType = InferActionTypes<typeof usersActions>