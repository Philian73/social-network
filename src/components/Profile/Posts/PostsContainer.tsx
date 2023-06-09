import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'
import { actions } from '../../../redux/profileReducer'

import { Posts } from './Posts'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof actions

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => ({
   posts: state.profilePage.posts,
   newPostText: state.profilePage.newPostText
})

export const PostsContainer = connect(mapStateToProps, { ...actions })(Posts)