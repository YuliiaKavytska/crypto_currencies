import styled from 'styled-components'

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  padding: 30px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #360033;
  background: -webkit-linear-gradient(to right, #0b8793, #360033); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0b8793, #360033);
`

export const Card = styled.div`
  flex: 0 1 860px;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: rgba(255, 255, 255, 0.4) 0 40px 100px 0;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }

  @media screen and (max-width: 480px) {
    min-height: 480px;
  }
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`

export const CardData = styled.div`
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;

  &:last-child {
    flex-grow: 1;
  }

  .ant-spin-nested-loading {
    min-height: 400px;

    @media screen and (max-width: 480px) {
      min-height: 200px;
    }
  }
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const Graph = styled.div`
  margin-top: 10px;
  min-height: 100%;
`
