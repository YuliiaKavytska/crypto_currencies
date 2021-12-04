import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Select } from 'antd'
import { getCryptoList, getLoading } from 'store/selectors'

import { useActions } from 'hooks/useActions'

import { CardTop, CustomButton, SymbolName } from './styles'

const { Option } = Select

const SelectForm = () => {
  const [selected, setSelected] = useState('Select a currency')
  const list = useSelector(getCryptoList)
  const loading = useSelector(getLoading)
  const { onSubscribe } = useActions()

  const onSelect = (value: string) => setSelected(value)

  const onSubscribeHandler = () => {
    const selectedItem = list.find((item) => item.symbol_id === selected)
    selectedItem && onSubscribe(selectedItem)
  }

  return (
    <CardTop>
      <SymbolName>
        <Select size="large" value={selected} onSelect={onSelect}>
          {list.map((currency, index) => (
            <Option key={index} value={currency.symbol_id}>
              {currency.asset_id_base} / {currency.asset_id_quote}
            </Option>
          ))}
        </Select>
      </SymbolName>
      <CustomButton type="primary" size="large" onClick={onSubscribeHandler} loading={loading}>
        Subscribe
      </CustomButton>
    </CardTop>
  )
}

export default SelectForm
