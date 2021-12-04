import { defaultCallback, ICurrency } from 'types/common'

export enum sagasAppTypes {
  INITIALIZE_APP = 'APP/INITIALIZE_APP'
}

export enum sagasCurrencyTypes {
  CURRENCY_SUBSCRIBE = 'CURRENCIES/CURRENCY_SUBSCRIBE',
  CURRENCY_HISTORY = 'CURRENCIES/CURRENCY_HISTORY',
  GET_LAST_INFO = 'CURRENCIES/GET_LAST_INFO'
}

export interface IInitializeApp {
  type: sagasAppTypes.INITIALIZE_APP
}

export interface ISubscribe {
  type: sagasCurrencyTypes.CURRENCY_SUBSCRIBE
  payload: { currency: ICurrency }
}

export interface IGetCurrencyHistory {
  type: sagasCurrencyTypes.CURRENCY_HISTORY
  payload: { currency: string }
}

export interface IGetLastInfo {
  type: sagasCurrencyTypes.GET_LAST_INFO
  payload: { currencyID: string; callback: defaultCallback }
}
