import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import cls from 'components/Login/LoginForm/LoginForm.module.css'
import { FC } from 'react'
import { LoginParamsType } from 'api/authAPI'

export const LoginForm: FC<InjectedFormProps<LoginParamsType>> = ({ handleSubmit }) => {
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
}

export const LoginReduxForm = reduxForm<LoginParamsType>({
   form: 'login'
})(LoginForm)