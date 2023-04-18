import React, { Component } from 'react'
import { userService } from '../services/user.service'

export class SignUp extends Component {
  state = {
    userToEdit: userService.getEmptyUser(),
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    this.setState(({ userToEdit }) => ({
      userToEdit: { ...userToEdit, [field]: value },
    }))
  }

  onSignUp = ev => {
    ev.preventDefault()
    userService.signup(this.state.userToEdit)
    this.props.history.push('/')
  }

  render() {
    const { name } = this.state.userToEdit
    return (
      <section className='sign-up'>
       <h1>Sign Up</h1>
        <form onSubmit={this.onSignUp}>
          <label htmlFor='name'>
            Username:{' '}
            <input
              onChange={this.handleChange}
              value={name}
              name='name'
              type='text'
              id='name'
            />
          </label>
          <button className='button-save'>
            Sign up
          </button>
        </form>
      </section>
    )
  }
}
