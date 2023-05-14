import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './styles/index.css'

import {AppStateType, store} from './redux/store'

import App from './App'

const rerenderEntireTree = (state: AppStateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))