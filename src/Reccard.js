import React from "react";
import img from './img/album.jpeg';
import './Reccard.css'

function Reccard(props){
    return(
        <>
            <li className="reccard">
                <img src={img} alt="" />
                <h3>{props.title}</h3>
            </li>
        </>
    );
}

export default Reccard;