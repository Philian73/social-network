import { Field, reduxForm } from 'redux-form'

import { LoginParamsType } from 'api/authAPI'
import { Input } from 'components/common/Input/Input'

import { isValidEmail, minLength, requiredField } from 'utils/validators'

import cls from 'components/Login/LoginForm/LoginForm.module.css'

const minPasswordLength = minLength(4)

export const LoginReduxForm = reduxForm<LoginParamsType>({
   form: 'login',
})(({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit} className={cls.form}>
         <label htmlFor="email">
            <Field component={Input}
                   validate={[requiredField, isValidEmail]}
                   type="text"
                   id="email"
                   name="email"
                   placeholder="Email"
            />
         </label>
         <label htmlFor="password">
            <Field component={Input}
                   validate={[requiredField, minPasswordLength]}
                   type="password"
                   id="password"
                   name="password"
                   placeholder="Password"
            />
         </label>
         <label htmlFor="rememberMe" style={{ display: 'flex', alignContent: 'center' }}>
            <Field component={Input}
                   type="checkbox"
                   id="rememberMe"
                   name="rememberMe"
            />
            <span>Remember Me</span>
         </label>
         {error && <div className={cls.summaryError}>
            <span>{error}</span>
         </div>}
         <button>Log In</button>
      </form>
   )
})