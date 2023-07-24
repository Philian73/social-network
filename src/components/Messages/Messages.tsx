import { FC } from 'react'

import s from './Messages.module.css'

import { MessagesPropsType } from './MessagesContainer'

import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import { AddMessageFormData, AddMessageReduxForm } from 'components/Messages/AddMessageForm/AddMessageForm'

export const Messages: FC<MessagesPropsType> = ({ messagesPage, sendMessage }) => {
   const sendNewMessage = (formData: AddMessageFormData) => {
      sendMessage(formData.newMessageBody)
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
            <AddMessageReduxForm onSubmit={sendNewMessage} />
         </div>
      </div>
   )
}