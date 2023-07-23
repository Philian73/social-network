import { instance } from 'api/api'

export const profileAPI = {
   getProfile: (userID: number) => {
      return instance
         .get(`profile/${userID}`)
   }
}