import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './styles/index.css'

import { store } from './redux/store'

import App from './App'

const rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>,
      document.getElementById('root')
   )
}

rerenderEntireTree()

store.subscribe(() => rerenderEntireTree())