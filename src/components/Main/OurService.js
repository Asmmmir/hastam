import React from "react";
import "./ourservice.scss";

const OurService = () => {
  return (
    <div className="service d-flex align-items-center justify-content-center">
      <div className="service__container container d-flex align-items-center justify-content-center ">
        <div className="row justify-content-center">
          <div className="col-5 service__text">
            <h4>Our services</h4>
            <h1>
              Experience The Power Of <span> Innovation. </span>
            </h1>
            <span className="line"></span>
            <p>
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Neque porro quisquam est
              qui do lorem ipsum quia dolor sit amets ipsum
            </p>
            <button>Read more</button>
          </div>
          <div className="col-lg
           d-flex align-items-center">
            <div className="row row-cols-3 justify-content-center">
              <div className="col service__feautures__item">
                <img src="/hastam/img/icons/video-marketing.svg" alt="" />
                <h5>Video marketing</h5>
                <p>Lorem ipsum Neque do porro quisquam est qui do quam </p>
              </div>
              <div className="col service__feautures__item">
                <img src="/hastam/img/icons/graphic-design.svg" alt="" />
                <h5>Graphic design</h5>
                <p>Lorem ipsum Neque do porro quisquam est qui do quam </p>
              </div>
              <div className="col service__feautures__item">
                <img src="/hastam/img/icons/ux.svg" alt="" />
                <h5>ui/ux Design</h5>
                <p>Lorem ipsum Neque do porro quisquam est qui do quam </p>
              </div>
              <div className="col service__feautures__item">
                <img src="/hastam/img/icons/web-design.svg" alt="" />
                <h5>WEBSITE DESIGN</h5>
                <p>Lorem ipsum Neque do porro quisquam est qui do quam </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
