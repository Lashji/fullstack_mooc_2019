import React from 'react'
const Message = ({ message }) => {
    let style = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderColor: "green",
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    }

    if (message == null)
        return null
    console.log("substring, ", message.substring(0, 5))
    if (message.substring(0,5) === "Error")
        style = {
            ...style,
            color: "red",
            borderColor: "red"
        }

    return (
        <div style={style}>
            <p>{message}</p>
        </div>
    )
}


export default Message