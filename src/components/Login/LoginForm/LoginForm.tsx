import { Field, reduxForm } from 'redux-form'

import cls from 'components/Login/LoginForm/LoginForm.module.css'
import { LoginParamsType } from 'api/authAPI'

export const LoginReduxForm = reduxForm<LoginParamsType>({
   form: 'login',
})(({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit} className={cls.form}>
         <label htmlFor="email">
            <Field component="input"
                   type="text"
                   id="email"
                   name="email"
                   placeholder="Email"
            />
         </label>
         <label htmlFor="password">
            <Field component="input"
                   type="password"
                   id="password"
                   name="password"
                   placeholder="Password"
            />
         </label>
         <label htmlFor="rememberMe">
            <Field component="input"
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