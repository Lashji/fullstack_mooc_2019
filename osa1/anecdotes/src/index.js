import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handler, text, points }) => {

    return (
        <div>
            <button onClick={handler()}>
                {text}
            </button>
        </div>
    )
}

const Anecdote = ({ props }) => {
    let { anecdotes, selected, points, header } = props

    return (
        <div>
            <h1>{header}</h1>
            <p>{anecdotes[selected]}</p>
            <p>votes: {points[selected]}</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const next = () => {

        return () => {
            let n = Math.floor(Math.random() * (props.anecdotes.length))
            while (n === selected) {
                n = Math.floor(Math.random() * (props.anecdotes.length))
            }
            setSelected(n)
        }
    }

    const vote = () => {

        return () => {
            const copy = [...points]
            copy[selected] += 1
            setPoints(copy)
        }
    }

    const getMostVoted = () => {
        let index = 0
        let value = points[index]
        for (let i = 0; i < points.length; i++) {
            if (points[i] > value) {
                value = points[i]
                index = i
            }
        }

        return index
    }

    let settings = { ...props, selected: selected, points: points, header: "Anecdote of the day" }
    let mostVotedSettings = { ...props, selected: getMostVoted(), points: points, header: "Anecdote with most votes" }

    return (
        <div>
            <Anecdote props={settings} />
            <Button handler={vote} points={points} text="vote" />
            <Button handler={next} points={points} text="next anecdote" />
            <Anecdote props={mostVotedSettings} />
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
