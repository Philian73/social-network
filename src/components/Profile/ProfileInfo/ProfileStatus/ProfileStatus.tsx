import { ChangeEvent, Component, FocusEvent } from 'react'
import { UpdateStatusType } from 'redux/profileReducer'

export class ProfileStatus extends Component<PropsType, StateType> {
   state: StateType = {
      editMode: false,
      statusInput: this.props.status,
   }

   activateEditMode = () => {
      if (!this.state.editMode) return

      this.setState({ editMode: true })
   }

   deactivateEditMode = () => {
      if (!this.state.editMode) return

      this.props.status !== this.state.statusInput && this.props.updateStatus(this.state.statusInput)
      this.setState({ editMode: false })
   }

   onStatusInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      e.target.select()
   }

   onStatusInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ statusInput: e.currentTarget.value })
   }

   render() {
      const { status } = this.props
      const { editMode, statusInput } = this.state
      const { activateEditMode, deactivateEditMode, onStatusInputFocus, onStatusInputChange } = this

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
}


// TYPES
type PropsType = {
   status: string
   updateStatus: UpdateStatusType
}
type StateType = {
   editMode: boolean
   statusInput: string
}