import React from 'react'

const Country = ({ data, display }) => {
    if (!display)
        return (
            <div>{data.name}</div>
        )
    let keyIndex = 0;

    const languages = data.languages.map(i => <li key={i + keyIndex++}>{i.name}</li>)

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

export default Country

