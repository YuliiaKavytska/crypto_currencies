import { takeEvery } from 'redux-saga/effects'
import { getHistorical, getLastCurrencyInfo, onCurrencySubscribe } from 'store/sagas/currencies'
import { sagasAppTypes, sagasCurrencyTypes } from 'types/actions/sagas'

import { sagaInitializeApp } from './app'

export function* sagaWatcher(): Generator {
  yield takeEvery(sagasAppTypes.INITIALIZE_APP, sagaInitializeApp)

  yield takeEvery(sagasCurrencyTypes.CURRENCY_SUBSCRIBE, onCurrencySubscribe)
  yield takeEvery(sagasCurrencyTypes.GET_LAST_INFO, getLastCurrencyInfo)
}
