import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './styles/index.css'

import {store} from './redux/store'

import App from './App'
import {Provider} from './StoreContext'

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