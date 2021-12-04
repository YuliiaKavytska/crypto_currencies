import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { GlobalStyles } from 'styles/Global'

import App from './App'
import store from './store'

import 'normalize.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
