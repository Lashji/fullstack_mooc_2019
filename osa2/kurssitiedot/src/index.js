import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    console.log(parts)

    const courses = () => parts.map(c => {
        console.log("c: ", c)
        return (
            <Part key={c.name} data={c} />
        )
    })

    return (
        <div>
            {courses()}
        </div>
    )
}


const Total = ({ parts }) => {
    let exercises = parts.map(i => i.exercises)
    let count = exercises.reduce((i, n) => i + n)
    return (
        <div>
            <p>total of {count} exercises</p>
        </div>
    )
}


const Part = ({ data }) => {
    console.log("part : ", data)
    return (
        <div>
            <p>{data.name} {data.exercises}</p>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {

        course: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            },
            {
                name: "Redux",
                exercises: 11
            }
        ]

    }


    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))