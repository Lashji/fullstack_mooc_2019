import React from 'react'

const Person = (props) => {
    console.log("person props: ", props)
    return (
        <li> {props.name}</li>
    )
}


export default Person