import React from 'react'

const Student = (props) => {
    return (
        <div className="student">
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>city:{props.city}</p>
        </div>
    )
}
export default Student
