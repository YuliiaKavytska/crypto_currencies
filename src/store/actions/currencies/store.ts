import { StoreCurrenciesTypes } from 'types/actions/store'
import { ICurrency, IHistoricItem, IInfoItem } from 'types/common'

export const storeCurrenciesActions = {
  setCurrenciesList: (currencies: Array<ICurrency>) =>
    ({
      type: StoreCurrenciesTypes.SET_CURRENCIES_LIST,
      payload: { currencies: currencies }
    } as const),
  setSelectedCurrency: (currency: ICurrency) =>
    ({
      type: StoreCurrenciesTypes.SET_SELECTED_CURRENCY,
      payload: { currency }
    } as const),
  setSelectedInfo: (info: IInfoItem) =>
    ({
      type: StoreCurrenciesTypes.SET_SELECTED_INFO,
      payload: { info }
    } as const),
  setHistorical: (history: Array<IHistoricItem>) =>
    ({ type: StoreCurrenciesTypes.SET_HISTORY, payload: { history } } as const),
  setLoading: (loading: boolean) => ({ type: StoreCurrenciesTypes.SET_LOADING, payload: { loading } } as const)
}
