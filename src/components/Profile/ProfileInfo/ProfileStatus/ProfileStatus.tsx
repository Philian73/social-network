import { ChangeEvent, FC, FocusEvent, useState } from 'react'
import { UpdateStatusType } from 'redux/reducers/profileReducer'

type PropsType = {
   status: string
   updateStatus: UpdateStatusType
}

export const ProfileStatus: FC<PropsType> = ({ status, updateStatus }) => {
   const [editMode, setEditMode] = useState(false)
   const [statusInput, setStatusInput] = useState(status)

   const activateEditMode = () => {
      if (editMode) return

      if (status !== statusInput) {
         setStatusInput(status)
      }

      setEditMode(true)
   }

   const deactivateEditMode = () => {
      if (!editMode) return

      if (status !== statusInput) {
         updateStatus(statusInput)
      }

      setEditMode(false)
   }

   const onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatusInput(e.currentTarget.value)
   }
   const onStatusInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      e.target.select()
   }

   return !editMode ? (
      <div>
         <span onDoubleClick={activateEditMode}>{status}</span>
      </div>
   ) : (
      <div>
         <input value={statusInput}
                onChange={onStatusInputChange}
                autoFocus
                onFocus={onStatusInputFocus}
                onBlur={deactivateEditMode}
         />
      </div>
   )
}