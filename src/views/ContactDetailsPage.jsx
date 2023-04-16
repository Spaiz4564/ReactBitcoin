import React, { Component } from 'react'
import { contactService } from '../services/contactService'
export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
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

  onBack = () => {
    this.props.history.push('/contacts')
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    const imgUrl = `https://robohash.org/${contact._id}`
    return (
      <section className='contact-details'>
        <img src={imgUrl} alt='' />
        <h1>Name: {contact.name}</h1>
        <h1>Email: {contact.email}</h1>
        <h1>Phone: {contact.phone}</h1>
        <button className='button-save' onClick={this.onBack}>
          Back
        </button>
      </section>
    )
  }
}
