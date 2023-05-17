import React from "react";
import './Pricard.css';
import img from "./img/mixes1.jpeg";

function Pricard(props){
    return(
        <>
            <li className="pricard">
                <img src={img} alt="" />
                <h3>{props.title}</h3>
                <p>{props.artists}</p>
            </li>
        </>
    );
}

export default Pricard;