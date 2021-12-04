import { IGetCurrencyHistory, IGetLastInfo, ISubscribe, sagasCurrencyTypes } from 'types/actions/sagas'
import { defaultCallback, ICurrency } from 'types/common'

export const sagaCurrenciesActions = {
  onSubscribe: (currency: ICurrency): ISubscribe =>
    ({
      type: sagasCurrencyTypes.CURRENCY_SUBSCRIBE,
      payload: { currency }
    } as const),
  getCurrencyHistory: (currency: string): IGetCurrencyHistory =>
    ({
      type: sagasCurrencyTypes.CURRENCY_HISTORY,
      payload: { currency }
    } as const),
  getLastInfo: (currencyID: string, callback: defaultCallback): IGetLastInfo =>
    ({
      type: sagasCurrencyTypes.GET_LAST_INFO,
      payload: { currencyID, callback }
    } as const)
}
