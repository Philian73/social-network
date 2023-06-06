import { connect } from 'react-redux'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/messagesReducer'

import { Messages } from './Messages'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type MessagesPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType) => ({
   messagesPage: state.messagesPage,
})

const AuthRedirectComponent = withAuthRedirect(Messages)

export const MessagesContainer = connect(mapStateToProps, { ...actions })(AuthRedirectComponent)