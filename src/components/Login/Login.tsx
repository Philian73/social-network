import { LoginReduxForm } from 'components/Login/LoginForm/LoginForm'
import { LoginParamsType } from 'api/authAPI'

export const Login = () => {
   const onSubmit = (formData: LoginParamsType) => {
      console.log(formData)
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}