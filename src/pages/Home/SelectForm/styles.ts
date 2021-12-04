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
`

export const CustomButton = styled(Button)`
  font-weight: 700;
`
