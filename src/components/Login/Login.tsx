import { FC } from 'react'

import { LoginParamsType } from 'api/authAPI'

import { LoginReduxForm } from 'components/Login/LoginForm/LoginForm'
import { LoginPropsType } from 'components/Login/LoginContainer'
import { Redirect } from 'react-router-dom'

export const Login: FC<LoginPropsType> = ({ isAuth, logIn }) => {
   const onSubmit = (formData: LoginParamsType) => {
      logIn(formData)
   }

   return isAuth ? (
      <Redirect to="/profile" />
   ) : (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}