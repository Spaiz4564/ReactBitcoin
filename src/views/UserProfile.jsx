import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitCoinService } from '../services/bitCoinService'
import { MovesList } from '../cmps/MovesList'

export class UserProfile extends Component {
  state = {
    loggedInUser: null,
    coins: null,
  }

  async componentDidMount() {
    const loggedInUser = await userService.getUser()
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
        <section className='user-profile'>
          <section className='user-info'>
            <h1>Hello {loggedInUser.name}!</h1>
            <h2>Coins: {loggedInUser.coins}</h2>
            <h3>
              <img src={require(`../assets/imgs/currency.png`)} alt='' />
              BTC: {coins}
            </h3>
          </section>

          <MovesList moves={loggedInUser.moves} />
        </section>
      </>
    )
  }
}
