import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.css'

import { HeaderPropsType } from './HeaderContainer'

export const Header: FC<HeaderPropsType> = ({ isAuth, login }) => {
   return (
      <header className={s.header}>
         <img src="https://www.reactacademy.live/logoReact300px.png" alt="Logo" />
         <div className={s.loginBlock}>
            {isAuth ? (
               <span>{login}</span>
            ) : (
               <Link to="/login">Login</Link>
            )}
         </div>
      </header>
   )
}