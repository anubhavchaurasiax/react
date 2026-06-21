import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brand} alt="" />
                    <button>Save  <Bookmark size={13} /></button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.date}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag}</h4>
                        <h4>{props.exp}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">

                <div>
                    <h4>{props.offer}</h4>
                    <p>{props.city}</p>
                </div>
                <button>APPLY NOW</button>
            </div>

        </div>
    )
}

export default Card
