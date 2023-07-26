import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { authThunks } from 'redux/reducers/authReducer'

import { Header } from './Header'

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

const mapDispatchToProps = {
   logOut: authThunks.logOut
}

export const HeaderContainer = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps)
)(class extends Component<HeaderPropsType> {
   render() {
      return <Header {...this.props} />
   }
})


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType