import React from 'react'
import { useSelector } from 'react-redux'

import moment from 'moment'
import { getSelected } from 'store/selectors'

import { CardData, CardInfo, Title } from 'pages/Home/styles'

import { InfoCol, InfoTitle, InfoValue } from './styles'

interface ICurrencyInfo<T> {
  selectedInfo: T
  title: string
}

interface baseInfo {
  time_exchange: string
  ask_price: number
}

function CurrencyInfo<T extends baseInfo | null>({ selectedInfo, title }: ICurrencyInfo<T>) {
  const selected = useSelector(getSelected)

  return (
    <CardData>
      <Title>
        {title} {selected && `for ${selected.asset_id_base} / ${selected.asset_id_quote}`}
      </Title>
      <CardInfo>
        <InfoCol>
          <InfoTitle>Symbol</InfoTitle>
          <InfoValue>
            {selected ? `${selected.asset_id_base} / ${selected.asset_id_quote}` : `Doesn't select`}
          </InfoValue>
        </InfoCol>
        <InfoCol>
          <InfoTitle>Time</InfoTitle>
          <InfoValue>
            {selectedInfo ? moment(selectedInfo.time_exchange).format('DD/MM/YYYY HH:mm:ss') : '00:00:00'}
          </InfoValue>
        </InfoCol>
        <InfoCol>
          <InfoTitle>Price</InfoTitle>
          <InfoValue>{selectedInfo ? selectedInfo.ask_price.toFixed(2) : '0'}</InfoValue>
        </InfoCol>
      </CardInfo>
    </CardData>
  )
}

export default CurrencyInfo
