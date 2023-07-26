import { Component, ComponentType } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { appThunks } from 'redux/reducers/appReducer'

import { Navbar } from 'components/Navbar/Navbar'
import { News } from 'components/News/News'
import { Music } from 'components/Music/Music'
import { Settings } from 'components/Settings/Settings'
import { MessagesContainer } from 'components/Messages/MessagesContainer'
import { UsersContainer } from 'components/Users/UsersContainer'
import { ProfileContainer } from 'components/Profile/ProfileContainer'
import { HeaderContainer } from 'components/Header/HeaderContainer'
import { LoginContainer } from 'components/Login/LoginContainer'

import './styles/App.css'
import { AppStateType } from 'redux/store'
import { Preloader } from 'components/common/Preloader/Preloader'

const mapStateToProps = (state: AppStateType) => ({
   isInitialized: state.app.isInitialized,
})

const mapDispatchToProps = {
   initialization: appThunks.initialization
}

export const App = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   withRouter,
)(class extends Component<AppPropsType> {
   componentDidMount() {
      const { initialization } = this.props

      initialization()
   }

   render() {
      return !this.props.isInitialized ? (
         <Preloader />
      ) : (
         <div className="wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
               <Switch>
                  <Route path="/profile/:userId?"
                         render={() => <ProfileContainer />} />
                  <Route path="/messages"
                         render={() => <MessagesContainer />} />
                  <Route path="/users"
                         render={() => <UsersContainer />} />
                  <Route path="/news"
                         render={() => <News />} />
                  <Route path="/music"
                         render={() => <Music />} />
                  <Route path="/settings"
                         render={() => <Settings />} />
                  <Route path="/login"
                         render={() => <LoginContainer />} />
               </Switch>
            </div>
         </div>
      )
   }
})

// TYPES
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = typeof mapDispatchToProps

type AppPropsType = MapStatePropsType & MapDispatchPropsType

export default App