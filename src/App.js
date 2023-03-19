

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";




import logo from './logo.svg';
import './App.css';
import './home.css';
import './form_chat.css';
import HomePage from "./Pages/HomePage";
import TolinkB from "./Pages/TolinkB";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faShieldHalved, faTruckFast, faLifeRing } from '@fortawesome/free-solid-svg-icons';

import { useEffect } from "react";


import React, { useState } from 'react';
// import { socket } from './socket';
// import { ConnectionState } from './Components/ConnectionState';
// import { ConnectionManager } from './Components/ConnectionManager';
// import { MyForm } from './Components/MyForm';
// import { Events } from './Components/MyEvents';
import { Alert } from "bootstrap";


// import Card_text_but_img from "./Pages/Card_text_but_img";
// import Car_text_img from "./Pages/Car_text_img";
// import Car_text_text from "./Pages/Car_text_text";

import Aboutusmenu from "./Pages/Aboutusmenu";
import Contactus from "./Pages/Contactus";
// import { createContext, useContext, useState } from "react";
// const ThemeContext = createContext("light");
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";

import { IsloginProvider } from "./Pages/IsloginContext"; //haixoa
import Loginstatus from "./Pages/Loginstatus";


library.add(fab, faCheckSquare, faCoffee, faShieldHalved, faTruckFast, faLifeRing);





function App() {




  return (
    <div>
      {/* <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: "1200px", backgroundColor: "#ebe9eb" }}>
      <Contactus />
      </div> */}
      {/* <Loginpage /> */}
      {/* <Register /> */}
      {/* <Aboutusmenu /> */}
      <IsloginProvider>

       <Loginstatus />

        {/* <HomePage /> */}
        <Routes>

          <Route path="/react_baicuoikhoa" element={<HomePage />} />
          <Route path="/react_baicuoikhoa/register" element={<Register />} />
          <Route path="/react_baicuoikhoa/login" element={<Loginpage  />} />

        </Routes>

        {/* <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm /> */}

        {/* <div className="hotro">

        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Hổ trợ trực tuyến</p>
        <div id="bbbb">
          <ul id="messages"></ul>
          <div className="c_form">
            <form id="form" action="">
              <input id="input" />
              <button>Send</button>
            </form>
          </div>
        </div>

      </div> */}

      </IsloginProvider> 
    </div >



  );
}

export default App;
