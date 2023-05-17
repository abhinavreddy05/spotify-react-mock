import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Main from './Main.js'

function App() {
  return (
    <>
    <div class="sidebar col-3">
      <Sidebar />
    </div>
    <div class="main col-9">
      <div class="container">
        <Main />
      </div>
    </div>
    <div class="player">
      
    </div>
    </>
  );
}

export default App;
