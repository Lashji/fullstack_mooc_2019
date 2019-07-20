import React, { useState } from 'react'
import Person from "./components/Person"


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }
  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const rows = () => persons.map(p => {
    console.log("p", p)
    return <Person
      key={p.name}
      person={p}
    />
  }
  )

  const addNewPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if ((persons.filter((p) => p.name == newName)).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    console.log("newname", newName)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input
            value={newName}
            onChange={nameChangeHandler} />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={numberChangeHandler} />
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