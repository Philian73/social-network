import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { actions, getAuthUserData } from 'redux/authReducer'

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
   connect(mapStateToProps, { ...actions, getAuthUserData })
)(HeaderAPIContainer)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & { getAuthUserData: any }

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType