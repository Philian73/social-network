import { Field, reduxForm } from 'redux-form'
import { Textarea } from 'components/common/Textarea/Textarea'
import { requiredField } from 'utils/validators'

export const AddMessageReduxForm = reduxForm<AddMessageFormData>({
   form: 'dialogAddMessageForm',
})(({ handleSubmit, invalid }) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component={Textarea}
                name="newMessageBody"
                placeholder="Enter your message"
                validate={[requiredField]}
         />
         <div>
            <button disabled={invalid}>Send</button>
         </div>
      </form>
   )
})


// TYPES
export type AddMessageFormData = {
   newMessageBody: string
}