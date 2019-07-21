import React from 'react'
import Person from './Person'

const Persons = ({ values }) => {
    console.log(values)
    const rows = () => values.map(p => {
        return <Person
            key={p.name}
            person={p}
        />
    })

    return (
        <div>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}


export default Persons