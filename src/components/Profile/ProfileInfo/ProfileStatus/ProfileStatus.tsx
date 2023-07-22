import { Component, FocusEvent } from 'react'

export class ProfileStatus extends Component<PropsType, StateType> {
   state: StateType = {
      editMode: false
   }

   activateEditMode = () => {
      !this.state.editMode && this.setState({ editMode: true })
   }

   deactivateEditMode = () => {
      this.state.editMode && this.setState({ editMode: false })
   }

   onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
      e.target.select()
   }

   render() {
      const { status } = this.props
      const { editMode } = this.state
      const { activateEditMode, deactivateEditMode, onFocusHandler } = this

      return !editMode ? (
         <div>
            <span onDoubleClick={activateEditMode}>{status}</span>
         </div>
      ) : (
         <div>
            <input value={status}
                   autoFocus
                   onFocus={onFocusHandler}
                   onBlur={deactivateEditMode}
            />
         </div>
      )
   }
}


// TYPES
type PropsType = {
   status: string
}
type StateType = {
   editMode: boolean
}