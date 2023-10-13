import React, { useEffect, useState } from "react";
import "./ourprojects.scss";
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

const OurProjects = () => {
  const images = [
    {
      id: 1,
      image: "/hastam/img/pics/pic1.jpg",
    },
    {
      id: 2,
      image: "/hastam/img/pics/pic2.jpg",
    },
    {
      id: 3,
      image: "/hastam/img/pics/pic3.jpg",
    }
  ];

  const [image, setImage] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const lastIndex = image.length - 1;

    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }

    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, image]);

  return (
    <div className="projects">
      <div className="container projects__container">
        <div className="row">
          <div className="col text-center">
            <h1>Our <span>Certificates</span></h1>
          </div>
        </div>
        <div className="row">
          <div className="slider projects__container__slider d-flex justify-content-center flex-wrap">
            {images.map((item, index) => {
              let position = "nextSlide";
              if (index === currentIndex) {
                position = "activeSlide";
              }
              if (
                index === currentIndex - 1 ||
                (index === 0 && index === image.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <div className={`${position} slider__item`} key={item.id}>
                  <img src={item.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="controls d-flex justify-content-center align-items-center">
          <BsFillArrowLeftSquareFill
          size='5rem'
            className="btn"
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          >
            Prev
          </BsFillArrowLeftSquareFill>
          <BsFillArrowRightSquareFill size='5rem'
            className="btn"
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          >
            Next
          </BsFillArrowRightSquareFill>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
