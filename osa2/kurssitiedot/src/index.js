import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
        </div>
    )
}


const Total = (props) => {
    let count = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
        <div>
            <p>Number of exercises {count}</p>
        </div>
    )
}


const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercise}</p>
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