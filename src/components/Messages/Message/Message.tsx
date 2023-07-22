import { FC } from 'react'

import s from '../Messages.module.css'

type PropsType = {
   message: string
}
export const Message: FC<PropsType> = ({ message }) => {
   return (
      <div className={s.message}>{message}</div>
   )
}