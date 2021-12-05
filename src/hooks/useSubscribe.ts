import { useEffect } from 'react'

import { notification } from 'antd'
import { socket } from 'api'

import { useActions } from 'hooks/useActions'
import { getHelloMessage } from 'utils/helpers'

export const useSubscribe = (selectedId: string | undefined) => {
  const { getLastInfo } = useActions()

  useEffect(() => {
    if (!selectedId) {
      return
    }

    socket.send(getHelloMessage(selectedId))

    // I decided to use a long polling because free API kay doesn't have an access to current quotes with WebSockets
    const infoInterval: ReturnType<typeof setInterval> = setInterval(() => {
      getLastInfo(selectedId, () => {
        clearInterval(infoInterval)
      })
    }, 10000)

    return () => {
      clearInterval(infoInterval)
    }
  }, [getLastInfo, selectedId])

  socket.onopen = () => {
    notification.info({ message: 'Connected using websocket' })
  }

  socket.onmessage = function (event: MessageEvent) {
    const resp = JSON.parse(event.data)
    if (resp.type !== 'error') {
      console.log(resp)
    }
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
