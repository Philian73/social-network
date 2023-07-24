import { instance } from './api'

export const authAPI = {
   me: () => {
      return instance
         .get(`auth/me`)
   }
}

// TYPES
export type LoginParamsType = {
   email: string
   password: string
   rememberMe?: boolean
   captcha?: string
}