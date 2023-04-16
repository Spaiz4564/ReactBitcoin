import React, { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { contactService } from '../services/contactService'
import { Link } from 'react-router-dom'

export class ContactPage extends Component {
  state = {
    contacts: null,
    showDetails: false,
    selectedContactId: null,
    filterBy: {
      name: '',
    },
  }

  onChangeFilter = filterBy => {
    this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
  }

  loadContacts = async () => {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      this.setState({ contacts })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.loadContacts()
  }

  onRemoveContact = async contactId => {
    try {
      await contactService.deleteContact(contactId)
      this.setState(({ contacts }) => ({
        contacts: contacts.filter(contact => contact._id !== contactId),
      }))
    } catch (error) {
      console.log('error:', error)
    }
  }

  render() {
    const { filterBy, contacts } = this.state
    return (
      <>
        <div className='filter-add-contact'>
          <ContactFilter
            filterBy={filterBy}
            onChangeFilter={this.onChangeFilter}
          />
          <Link to='/contact/edit'>
            <span> Add contact</span>
          </Link>
        </div>

        <ContactList
          onRemoveContact={this.onRemoveContact}
          contacts={contacts}
        />
      </>
    )
  }
}
