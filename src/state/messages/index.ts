export type MessageType = {
   message: string
   id: number
}

export type DialogType = {
   id: number
   name: string
}

export const dialogs: DialogType[] = [
   {id: 1, name: 'Nikolay'},
   {id: 2, name: 'Darya'},
   {id: 3, name: 'Nikita'},
   {id: 4, name: 'Maxim'},
   {id: 5, name: 'Vasiliy'},
   {id: 6, name: 'Andrei'},
]
export const messages: MessageType[] = [
   {id: 1, message: 'Hi'},
   {id: 2, message: 'How are you doing?'},
   {id: 3, message: 'See you?'},
   {id: 4, message: 'Yo'},
   {id: 5, message: 'Yo'},
]