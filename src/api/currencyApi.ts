import moment from 'moment'
import { ICurrency, IHistoricItem, IInfoItem } from 'types/common'

import { instance } from './index'

const currencyApi = {
  getAllSymbols() {
    return (
      instance
        .get<ICurrency[]>(`v1/symbols`, { params: { filter_symbol_id: 'SPOT' } })
        // It seems backend doesn't have a pagination, so i decided to do a slice of the list
        .then((res) => res.data.slice(0, 50))
    )
  },

  getQuoteHistory(currencyID: string) {
    return instance
      .get<Array<IHistoricItem>>(`v1/quotes/${currencyID}/history`, {
        params: {
          //  Here we get historical info about currency a week ago
          time_start: moment().subtract(7, 'day').format('YYYY-MM-DDTHH:mm:ss')
        }
      })
      .then((res) => res.data)
  },

  getQuoteCurrentData(currencyID: string) {
    return instance
      .get<Array<IInfoItem>>(`/v1/quotes/current`, {
        params: { filter_symbol_id: currencyID }
      })
      .then((res) => res.data)
  }
}

export default currencyApi
