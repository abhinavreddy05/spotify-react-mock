import React from "react";
import profile from './img/user.jpg';
import './Main.css';
import Reccard from './Reccard.js';
import Pricard from "./Pricard.js";

function Main(){
    return(
        <>
            <div className="controls">
                <div className="nav">
                    <button><span className="material-symbols-rounded">navigate_before</span></button>
                    <button><span className="material-symbols-rounded">navigate_next</span></button>
                </div>
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="welcome">
                <h2>Good morning</h2>
            </div>
            <div className="recommended">
                <ul>
                    {Generatecards(6)}
                </ul>
            </div>
            <div className="mixes">
                <div>
                    <h3>Your top mixes</h3>
                    <a href="/">Show all</a>
                </div>
                <ul>
                    <Pricard title = "Pop Mix" artists="Maroon 5, blackbear, Katy Perry and more" />
                </ul>
            </div>
        </>
    );
}

function Generatecards(num){
    var cards = [];
    for (let i = 0; i < num; i++) {
        cards.push(<Reccard title = "Havanna" />)
    }
    return(cards);
}

export default Main;