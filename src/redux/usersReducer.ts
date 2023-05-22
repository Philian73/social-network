import { InferActionTypes } from './store'
import { UserType } from './types'

type ActionsType = InferActionTypes<typeof actions>

type InitialStateType = typeof initialState

const initialState = {
   users: [] as UserType[],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
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
      default:
         return state
   }
}

export const actions = {
   setUsers: (users: UserType[]) => ({ type: 'SET-USERS', payload: { users } } as const),
   setTotalUsersCount: (count: number) => ({ type: 'SET-USERS-TOTAL-COUNT', payload: { count } } as const),
   setCurrentPage: (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', payload: { currentPage } } as const),
   follow: (userID: number) => ({ type: 'FOLLOW', payload: { userID } } as const),
   unfollow: (userID: number) => ({ type: 'UNFOLLOW', payload: { userID } } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE-IS-FETCHING', payload: { isFetching } } as const),
}