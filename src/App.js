import "./App.css";
import "./home.css";
import "./form_chat.css";
import { Route, Routes, Link } from "react-router-dom";
// import HomePage from "./Pages/Homepage/Homepage";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import { FaShoppingBag, FaTrash } from "react-icons/fa";
import { Dropdown, Badge } from "react-bootstrap";

import { useState, useEffect, useContext } from "react";
import { Context } from "./Context/Context";
import YourCart from "./Pages/YourCart/YourCart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CheckOut from "./Pages/CheckOut/CheckOut";

import HomePage from "./Pages/HomePage";
import TolinkB from "./Pages/TolinkB";
import Footer from "./Pages/Footer";


import { Fragment } from 'react';
import ScrollButton from './ScrollButton/ScrollButton';
import { Content, Heading } from './ScrollButton/style';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";
import Aboutusmenu from "./Pages/Aboutusmenu";
import Contactus from "./Pages/Contactus";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import { IsloginProvider } from "./Pages/IsloginContext"; //haixoa
import Loginstatus from "./Pages/Loginstatus";
import { Alert } from "bootstrap";
import imglogin from "./Pages/Homepage/modeNiture.png";
import { products } from "./Pages/AllProducts/data";
import FramePosterCategory from "./Pages/AllProducts/FramePosterCategory";
import DecorationCategory from "./Pages/AllProducts/DecorationCategory";
import FurnitureCategory from "./Pages/AllProducts/FurnitureCategory";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing
);

function App() {

  const handl_nav = (event) => {
    // event.preventDefault();
    console.log(444)

  }

  const { cartItem, removeFromCart, totalItem, setDisplayPage } =
    useContext(Context);
  const cartEmpty = totalItem === 0;
  // className="App bg-body-tertiary"
  return (
    <IsloginProvider>
      <Fragment>
        <div>
          <nav className="navbar navbar-expand-lg bg-body d-flex">
            <div className="container">
              {/* <Link to="/react_baicuoikhoa/" className="navbar-brand fw-bold fs-2 text ms-5">
            Superb.
          </Link> */}

              <div>
                <Link to="/react_baicuoikhoa/" className="navbar-brand fw-bold fs-2 text">
                  <img
                    className=""
                    style={{ width: "100%", height: "100%" }}
                    src={imglogin}
                    alt=""
                  />
                </Link>
              </div>

              {/* nav-bar me-4 pe-5 bg-primary*/}
              <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="">

                  <button onClick={handl_nav}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>


                  <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                      <li className="nav-item">

                        {/* responsive */}
                        {/*position-fixed bg-primary style={{ width: "100%", zIndex: "1", top: "0px", left: "0px", height: "600px", paddingLeft: "20px" }} */}
                        <div className="nav_res" >

                          {/* responsive */}
                          <div className="nav_boder position-relative" >

                            <button
                              className="navbar-toggler position-absolute btn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            
                              style={{ color: "white", fontSize: "20px", left: "82%" }}>
                              
                              x
                            </button>


                            <ul className="navbar-nav nav_wight">
                              <li className="nav-item me-3" >
                                <Link to="/react_baicuoikhoa/" className="nav-link active" aria-current="page" >
                                  <div className="navcolor">Home</div>

                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link
                                  onClick={() => setDisplayPage([...products])}
                                  to="/react_baicuoikhoa/all-products"
                                  className="nav-link "
                                  style={{ color: "black" }}
                                >
                                  <div className="navcolor">
                                    All Products
                                  </div>
                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link to="/react_baicuoikhoa/about-us" className="nav-link" >
                                  <div className="navcolor">
                                    About Us
                                  </div>
                                </Link>
                              </li>

                              <li className="nav-item me-3">
                                <Link to="/react_baicuoikhoa/contact" className="nav-link">
                                  <div className="navcolor">
                                    Contact Us
                                  </div>
                                </Link>
                              </li>
                              <li className="nav-item me-3">
                                <Link to="/react_baicuoikhoa/cart" className="nav-link" style={{ color: "black" }}>
                                  <div className="navcolor">
                                    Your Cart
                                  </div>
                                </Link>
                              </li>
                              <li className="nav-item me-3">
                                <Dropdown>
                                  <Dropdown.Toggle variant="Dark" className="position-relative">

                                    <div className="nav_gio">
                                      <FaShoppingBag
                                        className="me-1"
                                        fontSize="25px"

                                      ></FaShoppingBag>
                                    </div>

                                    <Badge className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-dark mt-1">
                                      {totalItem}
                                    </Badge>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="mt-1" style={{ minWidth: 400 }}>
                                    <span>
                                      {cartEmpty ? (
                                        <div className="d-flex justify-content-center">
                                          Your Cart Is Currently Empty.
                                        </div>
                                      ) : (
                                        <div className="d-flex flex-column">
                                          {cartItem.map((item) => (
                                            <div
                                              key={item.product.id}
                                              className="p-2 d-flex flex-row align-items-center justify-content-start"
                                            >
                                              {
                                                <img
                                                  className="ms-3 rounded-circle me-3"
                                                  style={{ width: 60 }}
                                                  src={item.product.img}
                                                ></img>
                                              }
                                              <div className="w-75">
                                                <div className="fw-bold">
                                                  {item.product.name} &nbsp;
                                                </div>
                                                <div>
                                                  {item.amount} x&nbsp;${item.product.price}
                                                </div>
                                              </div>
                                              <FaTrash
                                                type="button"
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="me-4"
                                              />
                                            </div>
                                          ))}
                                          <Link to="/react_baicuoikhoa/cart" className="nav-link">
                                            <div className="d-flex justify-content-center">
                                              <button
                                                style={{ minWidth: 350 }}
                                                className="btn btn-dark p-2 mb-2 mt-3"
                                              >
                                                Go To Cart{" "}
                                              </button>
                                            </div>
                                          </Link>
                                        </div>
                                      )}
                                    </span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </li>

                              <li className="nav-item">
                                <Loginstatus />
                              </li>
                            </ul>
                          </div>
                        </div>




                      </li>





                    </ul>

                  </div>
                </div>
              </nav>



            </div>
          </nav>

          <Routes>
            <Route path="/react_baicuoikhoa/" element={<HomePage />} />
            <Route path="/react_baicuoikhoa/all-products" element={<AllProducts />} />
            <Route
              path="/react_baicuoikhoa/all-products/frame&poster"
              element={<FramePosterCategory />}
            />
            <Route
              path="/react_baicuoikhoa/all-products/decoration"
              element={<DecorationCategory />}
            />
            <Route path="/react_baicuoikhoa/all-products/furniture" element={<FurnitureCategory />} />
            <Route path="/react_baicuoikhoa/about-us" element={<Aboutusmenu />} />
            <Route path="/react_baicuoikhoa/contact" element={<Contactus />} />
            <Route path="/react_baicuoikhoa/products/:id" element={<ProductDetails />} />
            <Route path="/react_baicuoikhoa/cart" element={<YourCart />} />
            <Route path="/react_baicuoikhoa/checkout" element={<CheckOut />} />
            <Route path="/react_baicuoikhoa/register" element={<Register />} />
            <Route path="/react_baicuoikhoa/login" element={<Loginpage />} />
          </Routes>

          <Footer />
        </div>
        <ScrollButton />
      </Fragment>
    </IsloginProvider>
  );
}
export default App;
