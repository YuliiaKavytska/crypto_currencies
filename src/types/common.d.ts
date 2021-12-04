export type inferActionTypes<T> = T extends {
  [key: string]: (...args: Array<any>) => infer U
}
  ? U
  : never

export type defaultCallback = () => void

export interface ICurrency {
  asset_id_base: string
  asset_id_base_exchange: string
  asset_id_quote: string
  asset_id_quote_exchange: string
  data_end: string
  data_orderbook_end: string
  data_orderbook_start: string
  data_quote_end: string
  data_quote_start: string
  data_start: string
  data_trade_end: string
  data_trade_start: string
  exchange_id: string
  price_precision: number
  size_precision: number
  symbol_id: string
  symbol_id_exchange: string
  symbol_type: string
}

export interface IHistoricItem {
  ask_price: number
  ask_size: number
  bid_price: number
  bid_size: number
  symbol_id: string
  time_coinapi: string
  time_exchange: string
}

export interface IInfoItem {
  ask_price: number
  symbol_id: string
  time_exchange: string
  ask_size: number
  bid_price: number
  bid_size: number
  time_coinapi: string
}
