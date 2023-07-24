import { Field, reduxForm } from 'redux-form'

export const AddMessageReduxForm = reduxForm<{ newMessageBody: string }>({
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