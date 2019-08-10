import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from "./components/Persons"
import Form from './components/AddPersonForm'
import Filter from './components/Filter'
import PersonService from './services/Persons'


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    PersonService.getAll()
      .then(data => {
        console.log(data)
        setPersons(data)
      })

    PersonService.getAll().then(res => console.log("service=", res))
  }, [])


  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }


  const deleteHandler = (id) => {
    console.log("delete id =>", id)

    let result = window.confirm("Do you want to delete message nr" + id)
    if (!result)
      return

    PersonService.deletePerson(id).then((res) => {

      console.log("delete res=>", res)
      setPersons(persons.filter(p => p.id !== id))
    })
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

    let pid = checkIfExist()

    if (pid !== -1) {

      if (!window.confirm("phonenumber already exists. Do you want to replace existing number with a new one?"))
        return

      PersonService.update(pid, personObject).then(() => {
        setPersons(persons.map(p => p.id !== pid ? p : personObject))
      })
      .catch(() => {
        console.log("error")
      })
    } else {

      PersonService.create(personObject).then((newPerson) => {
        console.log("creating new person", newPerson)
        setPersons(persons.concat(newPerson))
      })

    }
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
    let filteredPersons = persons.filter((p) => p.name === newName)
    if (filteredPersons.length > 0) {
      return filteredPersons[0].id
    }

    return -1
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
      <Persons values={getFilteredValues()} deleteHandler={deleteHandler} />

    </div>
  )

}

export default App