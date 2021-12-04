import { combineReducers } from 'redux'
import { currencies } from 'store/reducers/currencies'

import { app } from './app'

export default combineReducers({
  app,
  currencies
})
