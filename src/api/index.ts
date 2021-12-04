import axios from 'axios'

export const socket = new WebSocket('wss://ws.coinapi.io/v1/')

const baseURL = 'https://rest.coinapi.io/'

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-CoinAPI-Key': '3A00D349-0B5C-4ACB-A2FF-76B91FC1DAFC'
  }
})
