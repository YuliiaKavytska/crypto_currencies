import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'

import { sagaWatcher } from './sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

export type storeType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch

saga.run(sagaWatcher)

export default store
