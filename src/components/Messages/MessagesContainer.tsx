import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { actions } from 'redux/messagesReducer'

import { Messages } from './Messages'
import { withAuthRedirect } from 'hoc/withAuthRedirect'

const mapStateToProps = (state: AppStateType) => ({
   messagesPage: state.messagesPage,
})

export const MessagesContainer = compose<ComponentType>(
   connect(mapStateToProps, { ...actions }),
   withAuthRedirect,
)(Messages)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type MessagesPropsType = MapDispatchPropsType & MapStatePropsType