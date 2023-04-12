import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'

import App from './App'

import {store} from './store/store'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
