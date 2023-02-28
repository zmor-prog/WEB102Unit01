import React from "react";

const Cards = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image}/>
            <h3>{props.description}</h3>
            <a href={props.button}>View More</a>            
        </div>
    )
}

export default Cards;