import { Field, reduxForm } from 'redux-form'

export const AddMessageReduxForm = reduxForm<AddMessageFormData>({
   form: 'dialogAddMessageForm',
})(({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component="textarea"
                name="newMessageBody"
                placeholder="Enter your message"
         />
         <div>
            <button>Send</button>
         </div>
      </form>
   )
})


// TYPES
export type AddMessageFormData = {
   newMessageBody: string
}