import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Filter from './components/Filter'

function App() {
  const [countryData, setCountryData] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])

  const filterCountries = () => {
    const tmp = countryData.filter(country => {
      console.log("country ", country.name)
      console.log("filtervalue: ", filterValue)
      const bool = country.name.toLowerCase().startsWith(filterValue)
      console.log(bool)
      return bool
    })

    setFilteredCountries(filteredCountries.concat(tmp))
    console.log("tmp: ", tmp)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        // console.log(res)
        setCountryData(res.data)
        // console.log(res.data)
      })
  }, [])

  const changeHandler = (event) => {
    setFilterValue(event.target.value)
    filterCountries()
    console.log(event.target.value)
  }

  return (
    <div>
      <Filter changeHandler={changeHandler} />
    </div>
  );
}

export default App;