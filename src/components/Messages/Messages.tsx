import React, {FC} from 'react'

import s from './Messages.module.css'

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

import {DialogType, MessageType} from '../../store'

type PropsType = {
   dialogs: DialogType[]
   messages: MessageType[]
}
export const Messages: FC<PropsType> = ({dialogs, messages}) => {
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