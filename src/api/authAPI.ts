import { instance } from './api'

export const authAPI = {
   me: () => {
      return instance
         .get(`auth/me`)
   }
}