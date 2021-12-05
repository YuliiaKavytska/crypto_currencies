import { takeEvery } from 'redux-saga/effects'
import { getLastCurrencyInfo, onCurrencySubscribe } from 'store/sagas/currencies'
import { SagasAppTypes, SagasCurrencyTypes } from 'types/actions/sagas'

import { sagaInitializeApp } from './app'

export function* sagaWatcher(): Generator {
  yield takeEvery(SagasAppTypes.INITIALIZE_APP, sagaInitializeApp)

  yield takeEvery(SagasCurrencyTypes.CURRENCY_SUBSCRIBE, onCurrencySubscribe)
  yield takeEvery(SagasCurrencyTypes.GET_LAST_INFO, getLastCurrencyInfo)
}
