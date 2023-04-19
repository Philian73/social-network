import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

import {addPost, RootStateType} from './redux/state'

export const rerenderEntireThree = (state: RootStateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}