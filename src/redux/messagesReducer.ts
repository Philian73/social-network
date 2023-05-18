import { InferActionTypes } from './store'

type ActionsType = InferActionTypes<typeof actions>

export type MessageType = {
   message: string
   id: number
}

export type DialogType = {
   id: number
   name: string
}

export type MessagesPageType = typeof initialState

const initialState = {
   dialogs: [
      { id: 1, name: 'Nikolay' },
      { id: 2, name: 'Darya' },
      { id: 3, name: 'Nikita' },
      { id: 4, name: 'Maxim' },
      { id: 5, name: 'Vasiliy' },
      { id: 6, name: 'Andrei' },
   ] as DialogType[],
   messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you doing?' },
      { id: 3, message: 'See you?' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' },
   ] as MessageType[],
   newMessageBody: ''
}

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
   switch (action.type) {
      case 'UPDATE-NEW-MESSAGE-BODY': {
         state.newMessageBody = action.payload.body
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

export const actions = {
   updateNewMessageBodyAC: (text: string) => ({ type: 'UPDATE-NEW-MESSAGE-BODY', payload: { body: text } } as const),
   sendMessageAC: () => ({ type: 'SEND-MESSAGE' } as const)
}