import { storeCurrenciesActions } from 'store/actions/currencies/store'
import { storeCurrenciesTypes } from 'types/actions/store'
import { ICurrency, IHistoricItem, IInfoItem, inferActionTypes } from 'types/common'

const initialState = {
  loading: false,
  cryptoList: [] as Array<ICurrency>,
  selectedCurrency: null as null | ICurrency,
  selectedInfo: null as null | IInfoItem,
  history: [] as Array<IHistoricItem>
}

type currenciesType = typeof initialState

type actionTypes = inferActionTypes<typeof storeCurrenciesActions>

export const currencies = (state = initialState, action: actionTypes): currenciesType => {
  switch (action.type) {
    case storeCurrenciesTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    case storeCurrenciesTypes.SET_CURRENCIES_LIST:
      return {
        ...state,
        cryptoList: action.payload.currencies
      }
    case storeCurrenciesTypes.SET_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload.currency
      }
    case storeCurrenciesTypes.SET_SELECTED_INFO:
      return {
        ...state,
        selectedInfo: action.payload.info
      }
    case storeCurrenciesTypes.SET_HISTORY:
      return {
        ...state,
        history: action.payload.history
      }
    default:
      return state
  }
}
