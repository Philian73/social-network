import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/profileReducer'

import { Profile } from './Profile'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileAPIContainer extends Component<ProfilePropsType> {
   componentDidMount() {
      const { setUserProfile } = this.props
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
            setUserProfile(response.data)
         })
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
})

export const ProfileContainer = connect(mapStateToProps, { ...actions })(ProfileAPIContainer)