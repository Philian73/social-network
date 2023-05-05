import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import {store} from './redux/state'

import './styles/index.css'

import App from './App'

import {RootStateType} from './redux/state'

const rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)