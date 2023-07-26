import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { authActions, authThunks } from 'redux/authReducer'

import { Header } from './Header'

class HeaderAPIContainer extends Component<HeaderPropsType> {
   componentDidMount() {
      const { getAuthUserData } = this.props

      getAuthUserData()
   }

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export const HeaderContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...authActions, ...authThunks })
)(HeaderAPIContainer)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof authActions & typeof authThunks

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType