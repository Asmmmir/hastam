import React from "react";
import "./header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
    <Navbar />
    <div className="header">
      <div className="container d-flex align-items-center justify-content-center header__container">
        <div className="header__text">
          <h4>Welcome to Hastam</h4>
          <h1>
            We are <span>creative</span> design agency
          </h1>
          <span className="line"></span>
          <p>
            Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit Neque porro elit Neque porro quis
            ipsum
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
    </>

  );
};

export default Header;
