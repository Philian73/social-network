import { InferActionTypes } from './store'
import { Dispatch } from 'redux'
import { UserType } from './types'

import { usersAPI } from '../api/usersAPI'

type ActionsType = InferActionTypes<typeof actions>

type InitialStateType = typeof initialState

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

export const actions = {
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

export const getUsers = (currentPage: number, pageSize: number) => {
   return (dispatch: Dispatch<ActionsType>) => {
      dispatch(actions.toggleIsFetching(true))

      usersAPI.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(actions.toggleIsFetching(false))
            dispatch(actions.setUsers(data.items))
            dispatch(actions.setTotalUsersCount(data.totalCount))
         })
   }
}

export const follow = (userID: number) => {
   return (dispatch: Dispatch<ActionsType>) => {
      dispatch(actions.toggleFollowingInProgress(userID, true))

      usersAPI.follow(userID)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(actions.followSuccess(userID))
            }

            dispatch(actions.toggleFollowingInProgress(userID, false))
         })
   }
}

export const unfollow = (userID: number) => {
   return (dispatch: Dispatch<ActionsType>) => {
      dispatch(actions.toggleFollowingInProgress(userID, true))

      usersAPI.unfollow(userID)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(actions.unfollowSuccess(userID))
            }

            dispatch(actions.toggleFollowingInProgress(userID, false))
         })
   }
}