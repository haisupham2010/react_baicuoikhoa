

import { Routes, Route } from "react-router-dom";
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


library.add(fab, faCheckSquare, faCoffee, faShieldHalved, faTruckFast, faLifeRing);





function App() {

  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents, setFooEvents] = useState([]);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   function onFooEvent(value) {
  //     setFooEvents(previous => [...previous, value]);
  //   }

    // socket.on('connect', onConnect);
    // socket.on('disconnect', onDisconnect);
    // socket.on('foo', onFooEvent);


    // let it = 0;
    // let s_l = 8; // số lượng dòng tin nhắn còn lưu lại
    // const item = []; // mảng các dòng tin nhắn
    // var messages = document.getElementById('messages');
    // var messagesb = document.getElementById('bbbb');
    // var form = document.getElementById('form');
    // var input = document.getElementById('input');


    // // từng dòng tin nhắn được lưu thành mảng, add những dòng tin nhắn vào bản chat
    // const render_mes = function () {
    //   const mang_mes = ["người ta", "đi chơi", "phố xa"]
    //   for (let ii = 0; ii < mang_mes.length; ii++) {
    //     item[ii] = document.createElement('li');
    //     item[ii].textContent = mang_mes[ii];
    //     item[ii].classList.add("thu_den");
    //     messages.appendChild(item[ii]);
    //   }

    // }
    // // từng dòng tin nhắn được lưu thành mảng, add những dòng tin nhắn vào bản chat


    // socket.on('chat message', msg => {
    //   // nhận được mail
    //   // alert("Nhận được mail" + String(msg.data))
    //   console.log("msg:", msg);
    //   // render_mes();

    //   item[it] = document.createElement('li'); // tạo ra một thẻ li đặc trưng cho dòng tin nhắn
    //   item[it].textContent = msg; // nội dung của thẻ li là bức thư gửi từ server
    //   item[it].classList.add("thu_den"); // tạo một class cho cái thẻ dòng tin nhắn đó

    //   messages.appendChild(item[it]); // khai báo thẻ li vừa tạo chính là con của thẻ ul
    //   it += 1; // chuyển sang một id dòng tin nhắn khác cho lần nhận tiếp theo
    //   // messagesb.style.width = `${120}px`;


  //     if (it >= s_l + 1 && 0 == 0) { // ta xử lý các dòng tin nhắn vượt mức quy định
  //       console.log("xóa" + String(it - s_l - 1))
  //       //item[it - s_l - 1].remove(); // remove cái thẻ dòng tin nhắn li có id nhỏ nhất nằm trên cùng
  //       document.querySelector(".thu_den").remove();

  //       for (let i = 0; i <= s_l - 2; i++) { // sắp xếp lại trật tự id trên bản chát
  //         console.log("xóa" + String(i));

  //         item[i] = item[i + 1];
  //         item[i].textContent = item[i + 1].textContent
  //         // messages.remove();

  //       }

  //       it = s_l; // đặt lại id cho nó



  //     }





  //   });


  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //     socket.off('foo', onFooEvent);
  //   };
  // }, []);


  // useEffect(() => {

  //   var messages = document.getElementById('messages');
  //   var form = document.getElementById('form');
  //   var input = document.getElementById('input');
  //   form.addEventListener('submit', function (e) {
  //     e.preventDefault();
  //     if (input.value) {
  //       //  alert("hop chat gui")
  //       // socket.emit('chat message', input.value);
  //       socket.emit('chat message', input.value);
  //       input.value = '';
  //     }
  //   });


  // }, []);

  console.log(document.body.offsetWidth);

  return (
    <div>
      {/* <div className="position-relative d-flex align-items-center justify-content-center" style={{ height: "1200px", backgroundColor: "#ebe9eb" }}>
      <Contactus />
      </div> */}
      {/* <Loginpage /> */}
     {/* <Register /> */}
      {/* <Aboutusmenu /> */}
      <HomePage />

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


    </div >



  );
}

export default App;
