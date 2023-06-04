import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../redux/store'
import { actions, getAuthUserData } from '../../redux/authReducer'

import { Header } from './Header'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & { getAuthUserData: any }

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

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

export const HeaderContainer = connect(mapStateToProps, { ...actions, getAuthUserData })(HeaderAPIContainer)