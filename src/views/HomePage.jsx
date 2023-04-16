import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export function HomePage() {
  return (
    <>
      <section className='home-page'>
        <h1>
          Bitcoin is an innovative payment network and a new kind of money.
        </h1>
        <div className='goTo'>
          <Link className='btn contacts' to='/contacts'>
            Contacts
          </Link>
          <Link className='btn charts' to='/statistics'>
            Charts
          </Link>
        </div>
      </section>
      <section className='background'></section>
    </>
  )
}
