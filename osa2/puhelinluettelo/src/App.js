import React, { useState } from 'react'
import Person from "./components/Person"


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const inputChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const rows = () => persons.map(p => {
    console.log("p", p)
    return <Person
      key={p.name}
      name={p.name}
    />
  }
  )

  const addNewPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }
    console.log("newname", newName)
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
            value={newName}
            onChange={inputChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )

}

export default App