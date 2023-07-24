import { Field, reduxForm } from 'redux-form'

export const AddPostReduxForm = reduxForm<AddPostFormData>({
   form: 'ProfileAddPostForm',
})(({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component="textarea" name="newPostText" />
         <div>
            <button>Add post</button>
         </div>
      </form>
   )
})

// TYPES
export type AddPostFormData = {
   newPostText: string
}