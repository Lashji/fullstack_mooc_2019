import React from 'react'
import Country from './Country'

const AllCountries = ({ countries, show }) => {
    console.log("all countries", countries)
    const len = countries.length
    

    if (len > 10)
        return <div>Too many matches, specify another filter</div>

    if (len > 1 && len < 10) {

        const rows = countries.map(c =>
            <Country show={show} key={c.alpha3Code} data={c} display={false} />
        )

        return (
            <div>{rows}</div>
        )
    }

    if (len === 1) {
        return <Country show={show} key={countries[0].alpha3Code} data={countries[0]} display={true} />
    }

    if (len === 0)
        return (
            <div></div>
        )

}

export default AllCountries