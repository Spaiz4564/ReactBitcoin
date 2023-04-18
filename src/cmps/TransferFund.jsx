import React from 'react'
import { useState } from 'react'

export default function TransferFund({ contact, onTransferCoins }) {
  const [amount, setAmount] = useState('')

  function onSetAmount({ target }) {
    setAmount(target.value)
  }

  function resetInput(ev) {
ev.preventDefault()
setAmount('')
  }

  return (
    <section className='transfer-funds'>
      <h1>Transfer coins to {contact.name}</h1>
      <form onSubmit={resetInput}>
        <label htmlFor='amount'>
          Amount:{' '}
          <input
            value={amount}
            onChange={onSetAmount}
            type='number'
            id='amount'
            name='amount'
          />
          <button className='button-save' onClick={() => onTransferCoins(contact, amount)}>
            Transfer
          </button>
        </label>
      </form>
    </section>
  )
}

