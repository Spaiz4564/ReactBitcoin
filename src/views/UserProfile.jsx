import React, { Component } from 'react'
import { userService } from '../services/userService'
import { bitCoinService } from '../services/bitCoinService'

export class UserProfile extends Component {
  state = {
    loggedInUser: null,
    coins: null,
  }

  componentDidMount() {
    const loggedInUser = userService.getUser()
    this.setState({ loggedInUser })
    this.getCoins(loggedInUser.coins)
  }

  getCoins(coins) {
    return bitCoinService.getRate(coins).then(res => {
      this.setState({ coins: res })
    })
  }

  render() {
    const { loggedInUser, coins } = this.state
    if (!loggedInUser) return <div>Loading...</div>
    return (
      <>
        <h1 className='my-profile'>My Profile</h1>
        <section className='user-profile'>
          <h1>Hello {loggedInUser.name}!</h1>
          <h2>Coins: {loggedInUser.coins}</h2>
          <h3>
            <img src={require(`../assets/imgs/currency.png`)} alt='' />
            BTC: {coins}
          </h3>
        </section>
      </>
    )
  }
}
