import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from './components/Dialogs/Dialogs'

const App: React.FC = () => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar />
         {/*<Profile />*/}
         <div className="app-wrapper-content">
            <Dialogs />
         </div>
      </div>
   )
}

export default App