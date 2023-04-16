import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact }) {
  if (!contacts) return <div>Loading...</div>
  return (
    <section className='contacts-list'>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>
            <ContactPreview onRemoveContact={onRemoveContact} contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  )
}
