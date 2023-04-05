import React from 'react'
import s from './Messages.module.css'

export const Messages: React.FC = () => {
   return (
      <div className={s.messages}>
         <div className={s.dialogsItems}>
            <div className={`${s.dialog} ${s.active}`}>
               Nikolay
            </div>
            <div className={s.dialog}>
               Darya
            </div>
            <div className={s.dialog}>
               Nikita
            </div>
            <div className={s.dialog}>
               Maxim
            </div>
            <div className={s.dialog}>
               Vasiliy
            </div>
            <div className={s.dialog}>
               Andrei
            </div>
         </div>
         <div className={s.chat}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you doing?</div>
            <div className={s.message}>See you?</div>
         </div>
      </div>
   )
}