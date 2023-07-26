import { FC } from 'react'

import { LoginParamsType } from 'api/authAPI'

import { LoginReduxForm } from 'components/Login/LoginForm/LoginForm'
import { LoginPropsType } from 'components/Login/LoginContainer'

export const Login: FC<LoginPropsType> = ({ logIn }) => {
   const onSubmit = (formData: LoginParamsType) => {
      logIn(formData)
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}