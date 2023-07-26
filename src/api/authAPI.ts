import { AxiosResponse } from 'axios'

import { instance, ResponseType } from './api'

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   logIn(data: LoginParamsType) {
      return instance.post<
         null,
         AxiosResponse<ResponseType<{ userId: number }>>,
         LoginParamsType
      >('auth/login', data)
   },
   logOut() {
      return instance.delete<ResponseType>('auth/login')
   },
}

// TYPES
export type LoginParamsType = {
   email: string
   password: string
   rememberMe?: boolean
   captcha?: string
}