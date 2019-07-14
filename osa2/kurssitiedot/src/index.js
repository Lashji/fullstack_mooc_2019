import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
    console.log("Header: ", course)
    return (

        <div>
            <h1>{course}</h1>
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

const Course = ({ data }) => {
    console.log("Course: ", data)
    return (
        <div>
            <Header course={data.name} />
            <Content parts={data.parts} />
            <Total parts={data.parts} />
        </div>
    )
}

const AllCourses = ({ data }) => {

    const courses = data.map(i => {
        return <Course key={i.name} data={i} />
    })

    return (
        <div>
            {courses}
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]




    return (
        <div>
            <AllCourses data={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))