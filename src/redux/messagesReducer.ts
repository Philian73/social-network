import {ActionTypes, MessagesPageType} from './state'

export type MessagesActionTypes =
   ReturnType<typeof updateNewMessageBodyAC>
   | ReturnType<typeof sendMessageAC>

export const messagesReducer = (state: MessagesPageType, action: ActionTypes): MessagesPageType => {
   switch (action.type) {
      case 'UPDATE-NEW-MESSAGE-BODY': {
         state.newMessageBody = action.body
         return state
      }
      case 'SEND-MESSAGE': {
         state.messages.push({
            id: state.messages.length + 1,
            message: state.newMessageBody
         })
         state.newMessageBody = ''
         return state
      }
      default:
         return state
   }
}

export const updateNewMessageBodyAC = (text: string) => ({
   type: 'UPDATE-NEW-MESSAGE-BODY',
   body: text
}) as const

export const sendMessageAC = () => ({
   type: 'SEND-MESSAGE'
}) as const