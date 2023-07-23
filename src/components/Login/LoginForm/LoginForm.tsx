import { reduxForm } from 'redux-form'
import { Login } from 'components/Login/Login'

import cls from 'components/Login/LoginForm/LoginForm.module.css'

export const LoginForm = () => {
   return (
      <form className={cls.form}>
         <label htmlFor="login">
            <input id="login"
                   placeholder="Login"
                   type="text"
            />
         </label>
         <label htmlFor="password">
            <input
               id="password"
               placeholder="Password"
               type="password"
            />
         </label>
         <label htmlFor="rememberMe">
            <input
               id="rememberMe"
               type="checkbox"
            />
            <span>Remember Me</span>
         </label>
         <button>Log In</button>
      </form>
   )
}

export const LoginReduxForm = reduxForm({
   form: 'login'
})(Login)