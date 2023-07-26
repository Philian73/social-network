import { Route, Switch } from 'react-router-dom'

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

const App = () => {
   return (
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

export default App