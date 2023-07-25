import { Field, reduxForm } from 'redux-form'

import cls from 'components/Login/LoginForm/LoginForm.module.css'
import { LoginParamsType } from 'api/authAPI'
import { Input } from 'components/common/Input/Input'

export const LoginReduxForm = reduxForm<LoginParamsType>({
   form: 'login',
})(({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit} className={cls.form}>
         <label htmlFor="email">
            <Field component={Input}
                   type="text"
                   id="email"
                   name="email"
                   placeholder="Email"
            />
         </label>
         <label htmlFor="password">
            <Field component={Input}
                   type="password"
                   id="password"
                   name="password"
                   placeholder="Password"
            />
         </label>
         <label htmlFor="rememberMe">
            <Field component={Input}
                   type="checkbox"
                   id="rememberMe"
                   name="rememberMe"
            />
            <span>Remember Me</span>
         </label>
         <button>Log In</button>
      </form>
   )
})