import cls from './Login.module.css'

export const Login = () => {
   return (
      <div>
         <h1>Login</h1>
         <form className={cls.form}>
            <label htmlFor="login">
               <input placeholder="Login" type="text" id="login" />
            </label>
            <label htmlFor="password">
               <input placeholder="Password" type="password" id="password" />
            </label>
            <label htmlFor="rememberMe">
               <input type="checkbox" id="rememberMe" name="rememberMe" />
               <span>Remember Me</span>
            </label>
            <button>Log In</button>
         </form>
      </div>
   )
}