import React, { FC } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

import { Spin } from 'antd'
import { getHistory, getLoading, getSelected } from 'store/selectors'

import { CardData, Graph, Title } from 'pages/Home/styles'
import { createGraphOptions } from 'utils/helpers'

const ChartingData: FC = () => {
  const history = useSelector(getHistory)
  const loading = useSelector(getLoading)
  const selected = useSelector(getSelected)

  const name = selected ? `${selected.asset_id_base} / ${selected.asset_id_quote}` : ''

  const { options, data } = createGraphOptions(history, name)

  return (
    <CardData>
      <Title>Charting data {selected && `for ${selected.asset_id_base} / ${selected.asset_id_quote}`}</Title>
      <Spin spinning={loading} tip="Loading last historical data">
        {history.length > 0 && (
          <Graph>
            <Line options={options} data={data} />
          </Graph>
        )}
      </Spin>
    </CardData>
  )
}

export default ChartingData
