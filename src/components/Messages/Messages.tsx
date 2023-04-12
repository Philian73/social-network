import React, {FC} from 'react'

import s from './Messages.module.css'

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

import {MessagesPageType} from '../../state/state'

type PropsType = {
   state: MessagesPageType
}
export const Messages: FC<PropsType> = ({state}) => {
   const dialogsMap = state.dialogs
      .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
   const messagesMap = state.messages
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