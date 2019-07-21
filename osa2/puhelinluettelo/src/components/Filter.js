import React from 'react'


const Filter = ({ data }) => {
    return (

        <div>
            filter shown with: <input onChange={data.filterHandler} />
        </div>
    )
}


export default Filter