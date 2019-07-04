import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ clickHandler, text }) => {

    return (
        <div>
            <button onClick={clickHandler}>
                {text}
            </button>
        </div>
    )
}

const Statistics = ({ stats }) => {

    return (
        <div>
            <p>good {stats.good}</p>
            <p>neutral {stats.neutral}</p>
            <p>bad {stats.bad}</p>
        </div>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setValue = (value) => {

        return () => {

            switch (value) {
                case "good":
                    setGood(good + 1)
                    break
                case "neutral":
                    setNeutral(neutral + 1)
                    break
                case "bad":
                    setBad(bad + 1)
                    break
                default: break
            }

            console.log("setting value")

        }
    }

    return (
        <div>
            <div>
                <h1>give feedback</h1>
            </div>
            <div>
                <Button clickHandler={setValue("good")} text="good" />
                <Button clickHandler={setValue("neutral")} text="neutral" />
                <Button clickHandler={setValue("bad")} text="bad" />
            </div>

            < Statistics stats={{ good: good, neutral: neutral, bad: bad }} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)