import { ComponentType, FC } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppStateType } from 'redux/store'

type MapStateToProps = ReturnType<typeof mapStateToPropsForRedirect>

const mapStateToPropsForRedirect = (state: AppStateType) => ({
   isAuth: state.auth.isAuth,
})

export const withAuthRedirect = <WCP extends {}>(WrappedComponent: ComponentType<WCP>) => {
   const RedirectComponent: FC<MapStateToProps> = ({ isAuth, ...restProps }) => {
      if (!isAuth) return <Redirect to="/login" />

      return <WrappedComponent {...restProps as WCP} />
   }

   return connect<MapStateToProps, {}, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)
}