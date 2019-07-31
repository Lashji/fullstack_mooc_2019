import React from 'react'

const Country = ({ data, display, show }) => {

    let keyIndex = 0;

    const languages = data.languages.map(i => <li key={i + keyIndex++}>{i.name}</li>)

    const displayCountry = () => {
        return show(data.name)
    }

    const allData = () => {
        return (
            <div>

                <h1>{data.name}</h1>
                <p>capital: {data.capital} </p>
                <p>Population: {data.population} </p>
                <h4>languages</h4>
                <ul>
                    {languages}
                </ul>

                <img alt={"img"} width={200} src={data.flag}></img>
            </div>
        )
    }

    if (!display) {
        return (
            <div>{data.name} <button onClick={displayCountry}>Show</button></div>
        )
    }

    return (
        allData()
    )
}

export default Country

