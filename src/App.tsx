import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Spin } from 'antd'
import { getInitialized } from 'store/selectors'

import { useActions } from 'hooks/useActions'
import Home from 'pages/Home'

function App() {
  const initialized = useSelector(getInitialized)
  const { initializeApp } = useActions()

  useEffect(() => {
    initializeApp()
  }, [])

  return (
    <Spin spinning={!initialized} size='large' tip='Loading...'>
      <Home />
    </Spin>
  )
}

export default App
