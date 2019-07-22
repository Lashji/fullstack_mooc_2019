import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Form from './components/AddPersonForm'
import Filter from './components/Filter'
const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('useEffect')
    axios
      .get("http://localhost:3001/persons")
      .then(r => {
        console.log(r)
        setPersons(r.data)
      })
  }, [])


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