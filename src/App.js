

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { useContext } from "react";
// import {IsloginContext} from "./Pages/IsloginContext";  //haixoa


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

// import { IsloginProvider } from "./Pages/IsloginContext"; //haixoa

library.add(fab, faCheckSquare, faCoffee, faShieldHalved, faTruckFast, faLifeRing);





function App() {

  // const { Vislogin, setVislogin } = useContext(IsloginContext);
  // console.log("Vislogin");
  // console.log(Vislogin);

  return (
    <div>
      {/* <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: "1200px", backgroundColor: "#ebe9eb" }}>
      <Contactus />
      </div> */}
      {/* <Loginpage /> */}
      {/* <Register /> */}
      {/* <Aboutusmenu /> */}
      {/* <IsloginProvider> //haixoa*/}

        <div className="container">
          <div className="row" >
            <div className="d-flex mb-2" style={{ gap: "5px", justifyContent: "flex-end", alignItems: "center" }}>
              <div>
                <div className="btn btn-primary" style={{ backgroundColor: "blue" }}>
                  <Link to="/react_baicuoikhoa/register" style={{ color: "white" }}>
                    Register
                  </Link>
                </div>


              </div>

              <div>


                <div className="btn btn-primary" style={{ backgroundColor: "blue" }}>
                  <Link to="/react_baicuoikhoa/login" style={{ color: "white" }}>
                    Login
                  </Link>
                </div>

              </div>

              {/* {Vislogin &&  (<div style={{ width: "50px", height: "50px" }} >
                <img className="img-fluid" alt="" src="/react_baicuoikhoa/loginpage/loginpage.png" />
              </div>)} */}


            </div>

          </div>
        </div>
        {/* <HomePage /> */}
        <Routes>

          <Route path="/react_baicuoikhoa" element={<HomePage />} />
          <Route path="/react_baicuoikhoa/register" element={<Register />} />
          <Route path="/react_baicuoikhoa/login" element={<Loginpage />} />

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

      {/* </IsloginProvider> //haixoa */}
    </div >



  );
}

export default App;
