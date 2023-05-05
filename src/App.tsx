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

import {ActionTypes, RootStateType} from './redux/state'

type PropsType = {
   state: RootStateType
   dispatch: (action: ActionTypes) => void
}
const App: FC<PropsType> = ({state, dispatch}) => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar sidebar={state.sidebar} />
         <div className="app-wrapper-content">
            <Switch>
               <Route path="/profile" render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />} />
               <Route path="/messages" render={() => <Messages messagesPage={state.messagesPage} />} />
               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
            </Switch>
         </div>
      </div>
   )
}

export default App