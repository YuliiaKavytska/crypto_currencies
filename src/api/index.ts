import axios from 'axios'

import { API_KEY } from 'utils/consts'

export const socket = new WebSocket('wss://ws.coinapi.io/v1/')

const baseURL = 'https://rest.coinapi.io/'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-CoinAPI-Key': API_KEY
  }
})
