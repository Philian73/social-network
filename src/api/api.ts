import axios from 'axios'
import { API_KEY } from './API_KEY'
import { UserType } from 'redux/types'

export type ResponseType<D = {}> = {
   resultCode: number
   messages: string[]
   data: D
}

export type GetItemsType = {
   items: UserType[]
   totalCount: number
   error: string | null
}

export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': API_KEY,
   },
})