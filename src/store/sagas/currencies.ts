import currencyApi from 'api/currencyApi'
import { call, put } from 'redux-saga/effects'
import { storeCurrenciesActions } from 'store/actions/currencies/store'
import { IGetLastInfo, ISubscribe } from 'types/actions/sagas'
import { IHistoricItem, IInfoItem } from 'types/common'

import { checkError } from 'utils/helpers'

export function* getHistorical(currency: string): Generator<unknown, void, Array<IHistoricItem>> {
  try {
    yield put(storeCurrenciesActions.setLoading(true))
    const history = yield call(currencyApi.getHistorical, currency)
    yield put(storeCurrenciesActions.setHistorical(history))
  } catch (err) {
    checkError(err)
  } finally {
    yield put(storeCurrenciesActions.setLoading(false))
  }
}

export function* onCurrencySubscribe(action: ISubscribe): Generator {
  try {
    yield call(getHistorical, action.payload.currency.symbol_id)
    yield put(storeCurrenciesActions.setSelectedCurrency(action.payload.currency))
  } catch (err) {
    checkError(err)
  }
}

export function* getLastCurrencyInfo(
  action: IGetLastInfo
): Generator<unknown, void, Array<IInfoItem>> {
  try {
    const info = yield call(currencyApi.getLastInfo, action.payload.currencyID)
    yield put(storeCurrenciesActions.setSelectedInfo(info[0]))
  } catch (err) {
    action.payload.callback()
    checkError(err)
  }
}
