import React from 'react'
import StateItems from './StateItems'

export default function States({stays}) {
  
  return (
    <main className='boxStates'>
      <ul className='statesList'>

        {stays.map((data, i) =>
          <StateItems key={i} data={data} />
        )}

      </ul>
    </main>
  )
}
