import React from 'react'
import { useSelector } from 'react-redux'

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title as ChartTitle,
  Tooltip
} from 'chart.js'
import { getSelected } from 'store/selectors'

import { useSubscribe } from 'hooks/useSubscribe'
import SelectForm from 'pages/Home/SelectForm'

import ChartingData from './Charting'
import CurrencyInfo from './CurrencyInfo'
import { Card, Wrapper } from './styles'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTitle, Tooltip, Legend)

const Home = () => {
  const selected = useSelector(getSelected)

  useSubscribe(selected?.symbol_id)

  return (
    <Wrapper>
      <Card>
        <SelectForm />
        <CurrencyInfo />
        <ChartingData />
      </Card>
    </Wrapper>
  )
}

export default Home
