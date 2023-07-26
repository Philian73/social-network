import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { AppStateType } from 'redux/store'
import { actions, thunks } from 'redux/profileReducer'

import { Profile } from './Profile'

class ProfileAPIContainer extends Component<PropsType> {
   componentDidMount() {
      const { getUserProfile, match, getStatus, authorizedUserId, history } = this.props
      let userId = Number(match.params.userId)

      if (!userId && authorizedUserId) {
         userId = authorizedUserId
      } else if (!userId && !authorizedUserId) {
         history.push('/login')
      }

      getUserProfile(userId)
      getStatus(userId)
   }

   render() {
      return <Profile {...this.props} />
   }
}

const mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id,
   isAuth: state.auth.isAuth,
})

export const ProfileContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...actions, ...thunks }),
   withRouter,
)(ProfileAPIContainer)


// TYPES
type PathParamsType = {
   userId: string
}

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions & typeof thunks

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType