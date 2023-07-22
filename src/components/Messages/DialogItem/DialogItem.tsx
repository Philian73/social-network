import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import s from '../Messages.module.css'

type PropsType = {
   id: number
   name: string
}
export const DialogItem: FC<PropsType> = ({ id, name }) => {
   const path: string = `/messages/${id}`

   return (
      <div className={s.dialog}>
         <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
      </div>
   )
}