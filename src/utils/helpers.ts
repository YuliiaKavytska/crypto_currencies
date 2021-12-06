import { notification } from 'antd'
import { AxiosError } from 'axios'
import moment from 'moment'
import { IHistoricItem } from 'types/common'

import { API_KEY } from 'utils/consts'

export const getHelloMessage = (symbolId: string, assetId: string, exchangeId: string) => {
  return JSON.stringify({
    type: 'hello',
    apikey: API_KEY,
    heartbeat: false,
    subscribe_data_type: ['trade'],
    subscribe_filter_symbol_id: [symbolId],
    subscribe_filter_asset_id: [assetId],
    subscribe_filter_exchange_id: [exchangeId]
  })
}

export const createGraphOptions = (list: Array<IHistoricItem>, name: string) => {
  const labels = list.map((item: IHistoricItem) => moment(item.time_exchange).format('DD/MM/YYYY HH:mm:ss'))

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true
      }
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: name,
        data: list.map((item: IHistoricItem) => item.ask_price),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return { options, data }
}

export const checkError = (err: unknown) => {
  const isAxiosError = (error: any): error is AxiosError => error.isAxiosError
  if (isAxiosError(err)) {
    notification.error({ message: err?.response?.data.error })
  } else if (err instanceof Error) {
    notification.error({ message: err.message })
  } else {
    throw err
  }
}
