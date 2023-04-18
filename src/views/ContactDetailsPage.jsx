import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import TransferFund from '../cmps/TransferFund'
import { MovesList } from '../cmps/MovesList'
import { spendBalance, transferCoins } from '../store/actions/user.actions'
import { connect } from 'react-redux'
export class _ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  async loadContact() {
    try {
      const contact = await contactService.getContactById(
        this.props.match.params.id
      )
      this.setState({ contact })
    } catch (err) {
      console.log(err)
    }
  }

  onTransferCoins = (contact, amount) => {
    this.props.transferCoins(contact, amount)
  }

  onBack = () => {
    this.props.history.push('/contacts')
  }

  get filterMoves() {
    const { contact } = this.state
    const { user } = this.props
    console.log(user)
    console.log(contact)
    return user.moves.filter((move) => move.toId === contact._id)
  }

  

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    const imgUrl = `https://robohash.org/${contact._id}?set=set5`
    return (
      <>
        <section className='contact-details-container'>
          <section className='contact-details'>
            <img src={imgUrl} alt='' />
            <h1>Name: {contact.name}</h1>
            <h1>Email: {contact.email}</h1>
            <h1>Phone: {contact.phone}</h1>
            <button className='button-save' onClick={this.onBack}>
              Back
            </button>
          </section>
          <TransferFund
            contact={contact}
            onTransferCoins={this.onTransferCoins}
          />
        </section>
        <MovesList moves={this.filterMoves} contact={contact} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userModule.loggedInUser,
})

const mapDispatchToProps = { spendBalance, transferCoins }

export const ContactDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactDetailsPage)
