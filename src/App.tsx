import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './styles/App.css'

import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import { MessagesContainer } from './components/Messages/MessagesContainer'
import { UsersContainer } from './components/Users/UsersContainer'

const App = () => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Switch>
               <Route path="/profile"
                      render={() => <Profile />} />
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
            </Switch>
         </div>
      </div>
   )
}

export default App