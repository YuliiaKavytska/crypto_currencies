import { storeCurrenciesActions } from 'store/actions/currencies/store'
import { StoreCurrenciesTypes } from 'types/actions/store'
import { ICurrency, IHistoricItem, IInfoItem, inferActionTypes, ITrade } from 'types/common'

const initialState = {
  loading: false,
  cryptoList: [] as Array<ICurrency>,
  selectedCurrency: null as null | ICurrency,
  selectedInfo: null as null | IInfoItem,
  tradeInfo: null as null | ITrade,
  history: [] as Array<IHistoricItem>
}

type currenciesType = typeof initialState

type actionTypes = inferActionTypes<typeof storeCurrenciesActions>

export const currencies = (state = initialState, action: actionTypes): currenciesType => {
  switch (action.type) {
    case StoreCurrenciesTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    case StoreCurrenciesTypes.SET_CURRENCIES_LIST:
      return {
        ...state,
        cryptoList: action.payload.currencies
      }
    case StoreCurrenciesTypes.SET_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload.currency
      }
    case StoreCurrenciesTypes.SET_SELECTED_INFO:
      return {
        ...state,
        selectedInfo: action.payload.info
      }
    case StoreCurrenciesTypes.SET_TRADE_INFO:
      return {
        ...state,
        tradeInfo: action.payload.tradeInfo
      }
    case StoreCurrenciesTypes.SET_HISTORY:
      return {
        ...state,
        history: action.payload.history
      }
    default:
      return state
  }
}
