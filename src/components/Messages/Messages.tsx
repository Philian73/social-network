import React, {createRef, FC} from 'react'

import s from './Messages.module.css'

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

import {MessagesPageType} from '../../redux/state'

type PropsType = {
   messagesPage: MessagesPageType
}
export const Messages: FC<PropsType> = ({messagesPage}) => {
   const newMessageEl = createRef<HTMLTextAreaElement>()

   const addMessageHandler = () => {
      alert(newMessageEl.current?.value)
   }

   const dialogsMap = messagesPage.dialogs
      .map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
   const messagesMap = messagesPage.messages
      .map(m => <Message key={m.id} message={m.message} />)

   return (
      <div className={s.messages}>
         <div className={s.dialogsItems}>
            {dialogsMap}
         </div>
         <div className={s.chat}>
            <div>{messagesMap}</div>
            <div>
               <textarea ref={newMessageEl}></textarea>
            </div>
            <div>
               <button onClick={addMessageHandler}>Send</button>
            </div>
         </div>
      </div>
   )
}