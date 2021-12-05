import { IGetCurrencyHistory, IGetLastInfo, ISubscribe, SagasCurrencyTypes } from 'types/actions/sagas'
import { defaultCallback, ICurrency } from 'types/common'

export const sagaCurrenciesActions = {
  onSubscribe: (currency: ICurrency): ISubscribe =>
    ({
      type: SagasCurrencyTypes.CURRENCY_SUBSCRIBE,
      payload: { currency }
    } as const),
  getCurrencyHistory: (currency: string): IGetCurrencyHistory =>
    ({
      type: SagasCurrencyTypes.CURRENCY_HISTORY,
      payload: { currency }
    } as const),
  getLastInfo: (currencyID: string, callback: defaultCallback): IGetLastInfo =>
    ({
      type: SagasCurrencyTypes.GET_LAST_INFO,
      payload: { currencyID, callback }
    } as const)
}
