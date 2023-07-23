import { instance, ResponseType } from './api'
import { ProfileType } from 'redux/types'

export const profileAPI = {
   getProfile(userID: number) {
      return instance
         .get<ProfileType>(`profile/${userID}`)
   },
   getStatus(userId: number) {
      return instance
         .get<string>(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put<ResponseType>(`profile/status`, { status })
   }
}