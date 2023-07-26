import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { authThunks } from 'redux/authReducer'

import { Login } from 'components/Login/Login'

const mapDispatchToProps = {
   logIn: authThunks.logIn
}

export const LoginContainer = compose<ComponentType>(
   connect(null, mapDispatchToProps)
)(Login)


// TYPES
type MapDispatchPropsType = typeof mapDispatchToProps

export type LoginPropsType = MapDispatchPropsType