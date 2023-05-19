import { InferActionTypes } from './store'

type ActionsType = InferActionTypes<typeof actions>

type UserType = {
   id: number
   photoUrl: string
   followed: boolean
   fullName: string
   status: string
   location: {
      country: string
      city: string
   }
}

type InitialStateType = typeof initialState

const initialState = {
   users: [] as UserType[],
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'SET-USERS':
         return { ...state, users: [...state.users, ...action.payload.users] }
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
   follow: (userID: number) => ({ type: 'FOLLOW', payload: { userID } } as const),
   unfollow: (userID: number) => ({ type: 'UNFOLLOW', payload: { userID } } as const),
}