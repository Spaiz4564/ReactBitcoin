import React, { Component } from 'react'
import { ContactList } from '../cmps/ContactList'
import { connect } from 'react-redux'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'
import {
  loadContacts,
  removeContact,
  setFilterBy,
} from '../store/actions/contact.actions'

export class _ContactPage extends Component {

  componentDidMount() {
    this.props.loadContacts()
  }


  onRemoveContact = async contactId => {
    try {
      await await this.props.removeContact(contactId)
    } catch (error) {
      console.log('error:', error)
    }
  }

  onChangeFilter = filterBy => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { filterBy, contacts } = this.props
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

const mapStateToProps = state => ({
  contacts: state.contactModule.contacts,
  filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage)
