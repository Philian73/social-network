import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/authReducer'

import { Header } from './Header'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderAPIContainer extends Component<HeaderPropsType> {
   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
         })
         .then(response => {
            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
   }

   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, { ...actions })(HeaderAPIContainer)