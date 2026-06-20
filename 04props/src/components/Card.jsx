import React from 'react'

const Card = (props) => {
    return (
        <div className="parent">
            <img src={props.img} alt="" />
            <h1>{props.name},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
