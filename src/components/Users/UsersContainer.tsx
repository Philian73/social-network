import { connect } from 'react-redux'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/usersReducer'

import { Users } from './Users'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => ({
   users: state.usersPage.users,
   pageSize: state.usersPage.pageSize,
   totalUsersCount: state.usersPage.totalUsersCount,
   currentPage: state.usersPage.currentPage,
})

export const UsersContainer = connect(mapStateToProps, { ...actions })(Users)