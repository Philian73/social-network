import { ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'
import { profileActions } from 'redux/reducers/profileReducer'

import { Posts } from './Posts'

const mapStateToProps = (state: AppStateType) => ({
   posts: state.profilePage.posts,
})

const mapDispatchToProps = {
   addPost: profileActions.addPost
}

export const PostsContainer = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
)(Posts)


// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType