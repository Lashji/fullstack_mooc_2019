import React from 'react'
// addNewPerson, newName, nameChangeHandler, newNumber, numberChangeHandler
const Form = ({ data }) => {
    console.log(data)
    return (<form onSubmit={data.addNewPerson}>
        <div>
            name: <input
                value={data.newName}
                onChange={data.nameChangeHandler} />
        </div>
        <div>
            number: <input
                value={data.newNumber}
                onChange={data.numberChangeHandler} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default Form