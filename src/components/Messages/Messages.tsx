import { ChangeEvent, FC } from 'react'

import s from './Messages.module.css'

import { MessagesPropsType } from './MessagesContainer'

import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'

export const Messages: FC<MessagesPropsType> = ({ messagesPage, updateNewMessageBody, sendMessage }) => {
   const onNewMessageBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => updateNewMessageBody(e.currentTarget.value)
   const onSendMessageClick = () => sendMessage()

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