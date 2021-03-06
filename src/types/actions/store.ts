export enum StoreAppTypes {
  INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS'
}

export enum StoreCurrenciesTypes {
  SET_CURRENCIES_LIST = 'CURRENCIES/SET_CURRENCIES_LIST',
  SET_SELECTED_CURRENCY = 'CURRENCIES/SET_SELECTED_CURRENCY',
  SET_SELECTED_INFO = 'CURRENCIES/SET_SELECTED_INFO',
  SET_TRADE_INFO = 'CURRENCIES/SET_TRADE_INFO',
  SET_HISTORY = 'CURRENCIES/SET_HISTORY',
  SET_LOADING = 'CURRENCIES/SET_LOADING'
}

export interface IInitSuccess {
  type: StoreAppTypes.INITIALIZED_SUCCESS
}
