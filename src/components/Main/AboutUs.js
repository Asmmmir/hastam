import React from "react";
import "./about.scss";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container d-flex align-items-center justify-content-end about__container">
        <div className="about__text">
          <h4>About Us</h4>
          <h1>
          We Bring <span>Creative</span> Ideas To life.
          </h1>
          <span className="line"></span>
          <p>
            Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit Neque porro elit Neque porro quis
            ipsum
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
