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

const Statistic = ({ text, value }) => {
    return (
        <><tr><td><p>{text}: {value}</p></td></tr ></>
    )
}

const Statistics = ({ stats }) => {
    if (stats.good === 0 && stats.neutral === 0 && stats.bad === 0)
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )

    const getAll = () => stats.good + stats.neutral + stats.bad
    const getAverage = () => (stats.good - stats.bad) / getAll()
    const getPositive = () => (stats.good * 100) / getAll()

    return (
        <div>
            <table>
                <tbody>
                    <Statistic text="good" value={stats.good} />
                    <Statistic text="neutral" value={stats.neutral} />
                    <Statistic text="bad" value={stats.bad} />
                    <Statistic text="all" value={getAll()} />
                    <Statistic text="average" value={!isNaN(getAverage()) ? getAverage() : 0} />
                    <Statistic text="positive" value={!isNaN(getPositive()) ? getPositive() : 0} />
                </tbody>
            </table>
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