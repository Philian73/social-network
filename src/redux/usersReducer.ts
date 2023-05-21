import { InferActionTypes } from './store'

type ActionsType = InferActionTypes<typeof actions>

type PhotosType = {
   small: string | null
   large: string | null
}

type UserType = {
   id: number
   name: string
   status: string
   photos: PhotosType
   followed: boolean
}

type InitialStateType = typeof initialState

const initialState = {
   users: [] as UserType[],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
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
}