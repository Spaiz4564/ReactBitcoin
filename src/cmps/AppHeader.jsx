import { Link, NavLink, withRouter } from 'react-router-dom'
import React from 'react'

export function _AppHeader() {
  return (
    <header className='app-header'>
      <section className='container'>
        <Link to="/">
        <img src={require(`../assets/imgs/logotop.png`)} />
        </Link>

        <nav>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
          <NavLink to='/statistics'>Chart</NavLink>
          <NavLink to='/profile'>
            <img
              className='profile-img'
              src={require(`../assets/imgs/profile.webp`)}
            />
          </NavLink>
        </nav>
      </section>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
