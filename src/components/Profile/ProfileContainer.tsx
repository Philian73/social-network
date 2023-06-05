import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

import { AppStateType } from '../../redux/store'
import { actions, getUserProfile } from '../../redux/profileReducer'

import { Profile } from './Profile'

type PathParamsType = {
   userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & { getUserProfile: any }

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends Component<PropsType> {
   componentDidMount() {
      const { getUserProfile, match } = this.props
      let userId = match.params.userId

      if (!userId) userId = '2'

      getUserProfile(userId)
   }

   render() {
      const { isAuth } = this.props

      if (!isAuth) return <Redirect to="/login" />

      return <Profile {...this.props} />
   }
}

const WithURLDataContainerComponent = withRouter(ProfileAPIContainer)

const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth,
})

export const ProfileContainer = connect(mapStateToProps, { ...actions, getUserProfile })(WithURLDataContainerComponent)