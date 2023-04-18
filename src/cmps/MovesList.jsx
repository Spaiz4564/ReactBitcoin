import React from 'react'

export function MovesList({ contact, moves }) {
  return (
    <section className='move-list'>
      <h2>{contact ? 'Your Moves:' : 'Your recent moves:'}</h2>
      {moves ? (
        <ul>
          {moves.map(move => (
            <li key={move.at}>
              <h4>At: {move.at}</h4>
              <h4>amount: {move.amount} Coins</h4>
            </li>
          ))}
        </ul>
      ) : (
        'No moves to show'
      )}
    </section>
  )
}
