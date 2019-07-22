import React from 'react'


const Filter = ({ changeHandler }) => {

    return (
        <div>
            find countries <input onChange={changeHandler} />
        </div>
    )

}


export default Filter