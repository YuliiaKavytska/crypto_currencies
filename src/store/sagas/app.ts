import currencyApi from 'api/currencyApi'
import { call, put } from 'redux-saga/effects'
import { storeAppActions } from 'store/actions/app/store'
import { storeCurrenciesActions } from 'store/actions/currencies/store'
import { ICurrency } from 'types/common'

import { checkError } from 'utils/helpers'

export function* sagaInitializeApp(): Generator<unknown, void, Array<ICurrency>> {
  try {
    const allPrices = yield call(currencyApi.getAllSymbols)
    yield put(storeCurrenciesActions.setCurrenciesList(allPrices))
  } catch (err) {
    checkError(err)
  } finally {
    yield put(storeAppActions.initializedSuccess())
  }
}
