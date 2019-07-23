import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Filter from './components/Filter'
import AllCountries from './components/AllCountries';

function App() {
  const [countryData, setCountryData] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const filterCountries = (value) => {
    const tmp = countryData.filter(country => {
      if (value === "")
        return false

      return country.name.toLowerCase().startsWith(value.toLowerCase())

    })

    console.log("tmp", tmp)
    setFilteredCountries(tmp)
  }

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountryData(res.data)
      })
  }, [])

  const changeHandler = (event) => {

    filterCountries(event.target.value)

  }

  return (
    <div>
      <Filter changeHandler={changeHandler} />
      <AllCountries countries={filteredCountries} />
    </div>
  );
}

export default App;