import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'

import './styles/App.css'

import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Messages} from './components/Messages/Messages'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'

import {rootStateType} from './state/state'

type PropsType = {
   state: rootStateType
}
const App: FC<PropsType> = ({state}) => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar state={state.sidebar} />
         <div className="app-wrapper-content">
            <Switch>
               <Route path="/profile" render={() => <Profile state={state.profilePage} />} />
               <Route path="/messages" render={() => <Messages state={state.messagesPage} />} />
               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
            </Switch>
         </div>
      </div>
   )
}

export default App