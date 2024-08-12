import React from 'react'


export default function HeaderState({stays}) {

    const cantidad = stays.length;

    return (

        <>
            <main className='headerState'>
                <h2>
                    Stays in Finland
                </h2>

                <p>
                    {cantidad} states
                </p>
            </main>
        </>
    )
}
