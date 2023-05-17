import React from "react";
import Card from "./Libcard.js"
import './Sidebar.css';

function Sidebar(){
    return(
        <>
        <div className="side-1">
            <a href="/" className="current">
                <span className="material-symbols-rounded">home</span>
                <span>Home</span>
            </a>
            <a href="/">
                <span className="material-symbols-rounded">search</span>
                <span>Search</span>
            </a>
        </div>
        <div className="side-2">
            <div className="lib-nav">
                    <div className="top">
                        <div>
                            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="libico"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                            <p>Your Library</p>
                        </div>
                        <div className="lib-ico">
                            <p>+</p>
                            <p>C</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>Playlists</li>
                            <li>Artists</li>
                            <li>Albums</li>
                            <li>Podcasts</li>
                        </ul>
                        <div>
                            <span className="material-symbols-rounded">search</span>
                            <button>Recents
                                <span className="material-symbols-rounded">
                                    keyboard_arrow_down
                                </span>
                            </button>
                        </div>
                    </div>
            </div>
            <div className="lib">
                {Generatecards(8)}
            </div>
        </div>
        </>
    );
}

function Generatecards(num){
    var cards = [];
    for (let i = 0; i < num; i++) {
        cards.push(<Card title = "Liked Songs" tags = {['Playlist', '530 songs']} />)
    }
    return(cards);
}

export default Sidebar;