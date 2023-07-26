import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { authThunks } from 'redux/reducers/authReducer'

import { Login } from 'components/Login/Login'
import { AppStateType } from 'redux/store'

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
   logIn: authThunks.logIn
}

export const LoginContainer = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps)
)(Login)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType