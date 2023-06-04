import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { usersAPI } from '../../api/usersAPI'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/profileReducer'

import { Profile } from './Profile'

type PathParamsType = {
   userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileAPIContainer extends Component<PropsType> {
   componentDidMount() {
      const { setUserProfile, match } = this.props
      let userId = match.params.userId

      if (!userId) userId = '2'

      usersAPI.getProfile(Number(userId))
         .then(response => {
            setUserProfile(response.data)
         })
   }

   render() {
      return <Profile {...this.props} />
   }
}

const WithURLDataContainerComponent = withRouter(ProfileAPIContainer)

const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
})

export const ProfileContainer = connect(mapStateToProps, { ...actions })(WithURLDataContainerComponent)