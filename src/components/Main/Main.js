import React from "react";
import "./main.scss";
import AboutUs from "../AboutUs";


const Main = () => {
  return (
    <>
    <div className="main">
      <div className="container d-flex align-items-center justify-content-center main__container">
        <div className="main__text">
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
   <AboutUs /> 
    </>

  );
};

export default Main;
