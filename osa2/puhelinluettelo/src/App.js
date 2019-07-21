import React, { useState } from 'react'
import Persons from "./components/Persons"
import Form from './components/AddPersonForm'
import Filter from './components/Filter'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (checkIfExist())
      return

    setPersons(persons.concat(personObject))
    resetFields()
  }

  const resetFields = () => {
    setNewName('')
    setNewNumber('')
  }

  const filterHandler = (event) => {
    console.log("filtering....")
    setFilter(event.target.value.toLowerCase())
  }

  const checkIfExist = () => {
    if ((persons.filter((p) => p.name === newName)).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return true
    }
    return false
  }

  const getFilteredValues = () => {
    return filter.length > 0 ? persons.filter(p => p.name.toLowerCase().startsWith(filter)) : persons
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter data={{ filterHandler }} />

      <h2>Add a new number</h2>

      <Form data={{
        addNewPerson,
        newName,
        nameChangeHandler,
        newNumber,
        numberChangeHandler
      }} />

      <h2>Numbers</h2>
      <Persons values={getFilteredValues()} />

    </div>
  )

}

export default App