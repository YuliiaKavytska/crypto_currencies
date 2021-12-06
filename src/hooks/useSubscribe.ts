import { useEffect } from 'react'

import { notification } from 'antd'
import { socket } from 'api'
import { ICurrency } from 'types/common'

import { useActions } from 'hooks/useActions'
import { getHelloMessage } from 'utils/helpers'

export const useSubscribe = (selected: ICurrency | null) => {
  const selectedId = selected?.symbol_id
  const { getLastInfo, setTradeInfo, setSelectedInfo } = useActions()

  useEffect(() => {
    if (!selectedId) {
      return
    }

    socket.send(getHelloMessage(selected?.symbol_id, selected?.asset_id_base, selected?.exchange_id))

    // I decided to use a long polling because free API kay doesn't have an access to current quotes with WebSockets
    const infoInterval: ReturnType<typeof setInterval> = setInterval(() => {
      getLastInfo(selectedId, () => {
        clearInterval(infoInterval)
      })
    }, 10000)

    return () => {
      setSelectedInfo(null)
      setTradeInfo(null)
      clearInterval(infoInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId])

  socket.onopen = () => {
    notification.info({ message: 'Connected using websocket' })
  }

  socket.onmessage = function (event: MessageEvent) {
    const resp = JSON.parse(event.data)
    if (resp.type.message) {
      socket.close(400, resp.type.message)
      notification.info({ message: resp.type.message })
      setTradeInfo(null)
      return
    }
    resp.ask_price = resp.price
    delete resp.price
    setTradeInfo(resp)
  }

  socket.onclose = function (event) {
    if (event.wasClean) {
      notification.error({ message: event.reason })
    } else {
      notification.info({ message: 'Connection closed' })
    }
  }

  socket.onerror = function (error) {
    console.error(error)
  }
}
