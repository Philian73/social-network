import React from 'react'
import s from './Messages.module.css'
import {NavLink} from 'react-router-dom'

type MessagePropsType = {
   message: string
}
const Message: React.FC<MessagePropsType> = ({message}) => {
   return (
      <div className={s.message}>{message}</div>
   )
}

type DialogItemPropsType = {
   id: number
   name: string
   classActive?: string
}
const DialogItem: React.FC<DialogItemPropsType> = props => {
   const path: string = `/messages/${props.id}`

   return (
      <div className={s.dialog}>
         <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
      </div>
   )
}

export const Messages: React.FC = () => {
   return (
      <div className={s.messages}>
         <div className={s.dialogsItems}>
            <DialogItem name="Nikolay" id={1} />
            <DialogItem name="Darya" id={2} />
            <DialogItem name="Nikita" id={3} />
            <DialogItem name="Maxim" id={4} />
            <DialogItem name="Vasiliy" id={5} />
            <DialogItem name="Andrei" id={6} />
         </div>
         <div className={s.chat}>
            <Message message="Hi" />
            <Message message="How are you doing?" />
            <Message message="See you?" />
            <Message message="Yo" />
            <Message message="Yo" />
         </div>
      </div>
   )
}