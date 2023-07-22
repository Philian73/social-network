import { FC } from 'react'


type PropsType = {
   status: string
}
export const ProfileStatus: FC<PropsType> = ({ status }) => {
   return (
      <div>
         <div>
            <span>{status}</span>
         </div>
         <div>
            <input value={status}></input>
         </div>
      </div>
   )
}