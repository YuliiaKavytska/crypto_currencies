import { defaultCallback, ICurrency } from 'types/common'

export enum SagasAppTypes {
  INITIALIZE_APP = 'APP/INITIALIZE_APP'
}

export enum SagasCurrencyTypes {
  CURRENCY_SUBSCRIBE = 'CURRENCIES/CURRENCY_SUBSCRIBE',
  CURRENCY_HISTORY = 'CURRENCIES/CURRENCY_HISTORY',
  GET_LAST_INFO = 'CURRENCIES/GET_LAST_INFO'
}

export interface IInitializeApp {
  type: SagasAppTypes.INITIALIZE_APP
}

export interface ISubscribe {
  type: SagasCurrencyTypes.CURRENCY_SUBSCRIBE
  payload: { currency: ICurrency }
}

export interface IGetCurrencyHistory {
  type: SagasCurrencyTypes.CURRENCY_HISTORY
  payload: { currency: string }
}

export interface IGetLastInfo {
  type: SagasCurrencyTypes.GET_LAST_INFO
  payload: { currencyID: string; callback: defaultCallback }
}
