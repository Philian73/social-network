import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { authThunks } from 'redux/authReducer'

import { Login } from 'components/Login/Login'

export const LoginContainer = compose<ComponentType>(
   connect(null, { logIn: authThunks.logIn })
)(Login)

type MapDispatchPropsType = {
   logIn: typeof authThunks['logIn']
}

export type LoginPropsType = MapDispatchPropsType