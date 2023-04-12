import React from 'react'

import s from './Messages.module.css'

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

type MessageType = {
   message: string
   id: number
}

type DialogType = {
   id: number
   name: string
}

export const Messages = () => {
   const dialogs: DialogType[] = [
      {id: 1, name: 'Nikolay'},
      {id: 2, name: 'Darya'},
      {id: 3, name: 'Nikita'},
      {id: 4, name: 'Maxim'},
      {id: 5, name: 'Vasiliy'},
      {id: 6, name: 'Andrei'},
   ]
   const messages: MessageType[] = [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you doing?'},
      {id: 3, message: 'See you?'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yo'},
   ]

   const dialogsMap = dialogs
      .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
   const messagesMap = messages
      .map(m => <Message key={m.id} message={m.message} />)

   return (
      <div className={s.messages}>
         <div className={s.dialogsItems}>
            {dialogsMap}
         </div>
         <div className={s.chat}>
            {messagesMap}
         </div>
      </div>
   )
}