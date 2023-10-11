import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container container justify-content-around p-1">
        <div className="navbar__logo text-center">
          <h1>Hastam</h1>
          <p>Atameken Electro Service</p>
        </div>
        <div className="navigation">
          <ul className="navigaton__list d-flex flex-wrap">
            <li className="p-2">Home</li>
            <li className="p-2">About us</li>
            <li className="p-2">Services</li>
            <li className="p-2">Portfolio</li>
            <li className="p-2">Pages</li>
            <li className="p-2">Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
