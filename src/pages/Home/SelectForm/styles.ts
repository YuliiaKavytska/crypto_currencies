import { Button } from 'antd'
import styled from 'styled-components'

export const CardTop = styled.div`
  display: flex;
  align-items: center;
`

export const SymbolName = styled.div`
  flex: 1 1 auto;
  padding-right: 20px;

  .ant-select {
    width: 100%;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 10px;
  }
`

export const CustomButton = styled(Button)`
  font-weight: 700;
  border-radius: 10px;
`
