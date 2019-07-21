import React from 'react'

const Person = ({ person }) => {
    // console.log("person props: ", person)
    return (
        <li> {person.name} {person.number}</li>
    )
}


export default Person