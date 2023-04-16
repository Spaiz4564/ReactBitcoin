// const axios = require('axios')
import axios from 'axios'

export const bitCoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  try {
    const res = await axios.get(
      `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    )
    const data = res.data
    return data
  } catch (err) {
    console.log(err)
  }
}

function getMarketPrice() {
    return [5, 10, 5, 20, 6, 10, 12]

}

function getConfirmedTransactions() {
    return [18,12, 25, 15, 10, 14, 4]

}
