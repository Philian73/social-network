import React, {ChangeEvent, FC} from 'react'

import s from './Messages.module.css'

import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

import {ActionTypes, MessagesPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/state'

type PropsType = {
   messagesPage: MessagesPageType
   dispatch: (action: ActionTypes) => void
}
export const Messages: FC<PropsType> = ({messagesPage, dispatch}) => {
   const onNewMessageBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(updateNewMessageBodyAC(e.currentTarget.value))
   }
   const onSendMessageClick = () => {
      dispatch(sendMessageAC())
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
               <textarea placeholder="Enter your message"
                         value={messagesPage.newMessageBody}
                         onChange={onNewMessageBodyChange}>
               </textarea>
            </div>
            <div>
               <button onClick={onSendMessageClick}>Send</button>
            </div>
         </div>
      </div>
   )
}