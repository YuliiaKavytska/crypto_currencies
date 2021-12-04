import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import moment from 'moment'
import { getSelected, getSelectedInfo } from 'store/selectors'

import { CardData, CardInfo, Title } from 'pages/Home/styles'

import { InfoCol, InfoTitle, InfoValue } from './styles'

const CurrencyInfo: FC = () => {
  const selected = useSelector(getSelected)
  const selectedInfo = useSelector(getSelectedInfo)

  return (
    <CardData>
      <Title>Market data {selected && `for ${selected.asset_id_base} / ${selected.asset_id_quote}`}</Title>
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
