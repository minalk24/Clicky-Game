import React from "react";
import './style.css';

const Card = (props) => {
    return (
        <img className= {`m-3 hoverbg column  ${props.animation? "animated wobble": ""}`} 
        type="button" 
        alt={props.name} 
        src={props.image}  
        onClick={() => props.clickPicture(props.id)} 
        />
    );
}

export default Card;