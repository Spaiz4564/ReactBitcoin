import { Sparklines, SparklinesLine } from 'react-sparklines'
import { bitCoinService } from '../services/bitCoinService'
import { NavLink, Route, Switch } from 'react-router-dom'
import React from 'react'

const marketPrice = () => {
  return bitCoinService.getMarketPrice()
}
const confirmedTransactions = () => {
  return bitCoinService.getConfirmedTransactions()
}

const ConfirmedTransactionsChart = () => {
  return (
    <>
      <h1>Confirmed Transactions Per Day</h1>
      <div className='chart'>
        <Sparklines data={confirmedTransactions()}>
          <SparklinesLine color='orange' />
        </Sparklines>
      </div>
      <h3>The number of daily confirmed Bitcoin transactions</h3>
    </>
  )
}

const MarketPriceChart = () => {
  return (
    <>
      <h1>Market Price (USD)</h1>
      <div className='chart'>
        <Sparklines data={marketPrice()}>
          <SparklinesLine color='orange' />
        </Sparklines>
      </div>
      <h3>Average USD market price across major Bitcoin exchanges</h3>
    </>
  )
}

export function StatisticPage() {
  return (
    <section className='charts-container'>
      <nav>
        <NavLink to='/statistics/confirmedTransactions'>
          Confirmed Transactions
        </NavLink>
        <NavLink to='/statistics/marketprice'>Market Price</NavLink>
      </nav>

      <section className='charts'>
        <Switch>
          <Route
            path='/statistics/confirmedTransactions'
            component={ConfirmedTransactionsChart}
          />
          <Route path='/statistics/marketprice' component={MarketPriceChart} />
          <MarketPriceChart />
        </Switch>
      </section>
    </section>
  )
}
