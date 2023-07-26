import { FC } from 'react'
import { Link } from 'react-router-dom'

import { HeaderPropsType } from './HeaderContainer'

import s from './Header.module.css'

export const Header: FC<HeaderPropsType> = ({ isAuth, login, logOut }) => {
   const handleLogOut = () => logOut()

   return (
      <header className={s.header}>
         <img src="https://www.reactacademy.live/logoReact300px.png" alt="Logo" />
         <div className={s.loginBlock}>
            {isAuth ? (
               <>
                  <span>{login} <span>-</span> </span>
                  <button onClick={handleLogOut}>Log Out</button>
               </>
            ) : (
               <Link to="/login">Login</Link>
            )}
         </div>
      </header>
   )
}