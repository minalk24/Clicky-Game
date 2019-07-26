import React from "react";
import './style.css';

const Card = (props) => {
    return (
        <img className="m-3 hoverImage column" type="button" 
        alt={props.name} src={props.image} onClick={() => props.id} />
    );
}

export default Card;