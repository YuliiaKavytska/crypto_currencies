import moment from 'moment'
import { ICurrency, IHistoricItem, IInfoItem } from 'types/common'

import { instance } from './index'

const currencyApi = {
  getAllPricesId() {
    return instance.get<ICurrency[]>(`v1/symbols`, { params: { filter_symbol_id: 'SPOT' } }).then((res) => res.data)
  },
  getHistorical(currencyID: string) {
    return instance
      .get<Array<IHistoricItem>>(`v1/quotes/${currencyID}/history`, {
        params: {
          time_start: moment().subtract(7, 'day').format('YYYY-MM-DDTHH:mm:ss')
        }
      })
      .then((res) => res.data)
  },
  getLastInfo(currencyID: string) {
    return instance
      .get<Array<IInfoItem>>(`/v1/quotes/current`, {
        params: { filter_symbol_id: currencyID }
      })
      .then((res) => res.data)
  }
}

export default currencyApi
