import { GetItemsType, instance } from './api'

export const usersAPI = {
   getUsers: (currentPage: number = 1, pageSize: number = 10) => {
      return instance
         .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow: (userID: number) => {
      return instance
         .post(`follow/${userID}`)
         .then(response => response.data)
   },
   unfollow: (userID: number) => {
      return instance
         .delete(`follow/${userID}`)
         .then(response => response.data)
   },
}