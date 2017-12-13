import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore('REDUCER GOES HERE')

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
