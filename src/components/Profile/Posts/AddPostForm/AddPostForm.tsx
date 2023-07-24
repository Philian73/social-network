import { Field, reduxForm } from 'redux-form'
import { maxLength, minLength, requiredField } from 'utils/validators'
import { Textarea } from 'components/common/Textarea/Textarea'

const maxLength150 = maxLength(150)
const minLength5 = minLength(5)

export const AddPostReduxForm = reduxForm<AddPostFormData>({
   form: 'ProfileAddPostForm',
})(({ handleSubmit, invalid }) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component={Textarea}
                warn={[requiredField, minLength5, maxLength150]}
                name="newPostText"
                placeholder="Post message"
         />
         <div>
            <button disabled={invalid}>Add post</button>
         </div>
      </form>
   )
})

// TYPES
export type AddPostFormData = {
   newPostText: string
}