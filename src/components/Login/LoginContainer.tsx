import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { authThunks } from 'redux/authReducer'

import { Login } from 'components/Login/Login'

export const LoginContainer = compose<ComponentType>(
   connect(null, { ...authThunks })
)(Login)

type MapDispatchPropsType = typeof authThunks

export type LoginPropsType = MapDispatchPropsType