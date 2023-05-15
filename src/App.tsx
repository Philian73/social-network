import React, {FC} from 'react'
import {Route, Switch} from 'react-router-dom'

import './styles/App.css'

import {StoreType} from './redux/store'

import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {News} from './components/News/News'
import {Music} from './components/Music/Music'
import {Settings} from './components/Settings/Settings'
import {MessagesContainer} from './components/Messages/MessagesContainer'

type PropsType = {
   store: StoreType
}
const App: FC<PropsType> = ({store}) => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar sidebar={store.getState().sidebar} />
         <div className="app-wrapper-content">
            <Switch>
               <Route path="/profile"
                      render={() => <Profile store={store} />} />
               <Route path="/messages"
                      render={() => <MessagesContainer store={store} />} />
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