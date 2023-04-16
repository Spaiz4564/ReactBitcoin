import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
  const imgUrl = `https://robohash.org/${contact._id}`
  return (
    <article className='contact-preview'>
      <Link to={`/contact/${contact._id}`}>
        <section className='info'>
          <img src={imgUrl} alt='' />
          <h2>{contact.name}</h2>
        </section>
      </Link>
      <section className='actions'>
      <i  onClick={ev => onRemoveContact(contact._id)} className="fa-solid fa-xmark"></i>
      <Link to={`/contact/edit/${contact._id}`}>
      <i  className="fa-solid fa-pen edit"></i>
      </Link>
     
      </section>
    </article>
  )
}
