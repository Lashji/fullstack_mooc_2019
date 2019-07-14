import React from 'react'
import AllCourses from "./Course"

const App = ({ data }) => {
    return (
        <div>
            <AllCourses data={data} />
        </div>
    )
}

export default App