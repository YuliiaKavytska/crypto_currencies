import { useEffect, useRef } from 'react'

import { notification } from 'antd'
import { socket } from 'api'

import { useActions } from 'hooks/useActions'
import { getHelloMessage } from 'utils/helpers'

export const useSubscribe = (selectedId: string | undefined) => {
  const { getLastInfo } = useActions()
  const selectedInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!selectedId) {
      return
    }

    socket.send(getHelloMessage(selectedId))

    const clear = () => selectedInterval.current && clearInterval(selectedInterval.current)
    clear()
    const onSubscribe = () => getLastInfo(selectedId, clear)

    const polingInterval = setInterval(onSubscribe, 10000)
    selectedInterval.current = polingInterval

    return () => {
      clear()
    }
  }, [selectedId])

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
