import { InferActionTypes } from 'redux/store'

type ActionsType = InferActionTypes<typeof actions>

type MessageType = {
   message: string
   id: number
}

type DialogType = {
   id: number
   name: string
}

type InitialStateType = typeof initialState

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
}

export const messagesReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'SEND-MESSAGE':
         if (action.payload.newMessageBody.trim()) {
            return {
               ...state,
               messages: [...state.messages, { id: state.messages.length + 1, message: action.payload.newMessageBody }],
            }
         } else {
            return state
         }
      default:
         return state
   }
}

export const actions = {
   sendMessage: (newMessageBody: string) => ({ type: 'SEND-MESSAGE', payload: { newMessageBody } } as const),
}