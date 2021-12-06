import { ICurrency, IHistoricItem, IInfoItem, ITrade } from 'types/common'

import { storeType } from './../index'

export const getInitialized = (state: storeType): boolean => state.app.initialized
export const getCryptoList = (state: storeType): Array<ICurrency> => state.currencies.cryptoList
export const getSelected = (state: storeType): ICurrency | null => state.currencies.selectedCurrency
export const getSelectedInfo = (state: storeType): IInfoItem | null => state.currencies.selectedInfo
export const getSelectedTrade = (state: storeType): ITrade | null => state.currencies.tradeInfo
export const getHistory = (state: storeType): Array<IHistoricItem> => state.currencies.history
export const getLoading = (state: storeType): boolean => state.currencies.loading
