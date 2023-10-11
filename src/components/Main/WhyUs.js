import React from "react";
import "./whyus.scss";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const WhyUs = () => {
  return (
    <div className="whyus">
      <div className="whyus__container container align-items-center d-flex">
        <div className="row justify-content-center">
          <div className="col-5">
            <h5>Why us?</h5>
            <h1>
              25 years of <span> experience</span> as a creative agency
            </h1>
            <button>Read more</button>
          </div>
          <div className="col-4 justify-content-center d-flex flex-column">
            <p>
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Lorem ipsum
            </p>

            <p>
              {" "}
              <IoCheckmarkDoneCircleOutline size='2rem' color="#6D95FC" /> Happy Customer
            </p>
            <p>
              {" "}
              <IoCheckmarkDoneCircleOutline size='2rem' color="#6D95FC" /> Experienced Team
            </p>
            <p>
              {" "}
              <IoCheckmarkDoneCircleOutline size='2rem' color="#6D95FC" /> Modern Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
