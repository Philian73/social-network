import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './styles/index.css'

import {store, StoreType} from './redux/store'

import App from './App'

const rerenderEntireTree = (store: StoreType) => {
   ReactDOM.render(
      <BrowserRouter>
         <App store={store} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store))