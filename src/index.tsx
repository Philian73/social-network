import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import {state, subscribe} from './redux/state'

import './styles/index.css'

import App from './App'

import {addPost, RootStateType, updateNewPostText} from './redux/state'

const rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)