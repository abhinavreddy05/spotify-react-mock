import React from "react";
import './Libcard.css';
import img from './img/liked.png';

function Card(props){
    return(
        <>
            <div className="card">
                <img src={img} alt="" />
                <div>
                    <h4>{props.title}</h4>
                        <div>
                            <span className="material-symbols-rounded">
                                push_pin
                            </span>
                            <ul>
                                <li>{props.tags[0]}</li>
                                .
                                <li>{props.tags[1]}</li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Card;