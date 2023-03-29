import React from 'react'
import s from './Header.module.css'

export const Header: React.FC = () => {
   return (
      <header className={s.header}>
         <img src="https://www.reactacademy.live/logoReact300px.png" alt="Logo" />
      </header>
   )
}