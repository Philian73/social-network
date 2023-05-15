import React from 'react'

import s from './Navbar.module.css'

import {StoreContext} from '../../StoreContext'

import {NavLink} from 'react-router-dom'

export const Navbar = () => (
   <StoreContext.Consumer>
      {store => {
         const state = store.getState().sidebar
         
         const friendsMap = state.friends.map(f => {
            return (
               <div key={f.id}>
                  <span>{f.nameFriend}</span>
                  <img className={s.avatar} src={f.avatar} alt="avatar" />
               </div>
            )
         })

         return (
            <nav className={s.nav}>
               <div className={`${s.item} ${s.active}`}>
                  <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
               </div>
               <div className={s.item}>
                  <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
               </div>
               <div className={s.item}>
                  <NavLink to="/news" activeClassName={s.active}>News</NavLink>
               </div>
               <div className={s.item}>
                  <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
               </div>
               <div className={s.item}>
                  <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
               </div>
               <div>
                  Friends
               </div>
               <div>
                  {friendsMap}
               </div>
            </nav>
         )
      }}
   </StoreContext.Consumer>
)