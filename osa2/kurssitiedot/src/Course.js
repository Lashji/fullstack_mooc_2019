import React from "react"

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

export default AllCourses