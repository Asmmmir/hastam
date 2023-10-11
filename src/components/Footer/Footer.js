import React from "react";
import "./footer.scss";
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs' 
import {GrMail} from 'react-icons/gr' 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container align-items-center d-flex">
        <div className="row">
          <div className="col">
            <h1>Get in <span> touch</span></h1>
            <p>
              Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro{" "}
            </p>
            <div className="contacts">
                <div className="contacts__item d-flex align-items-center ">
                    <div className="contacts__item__icon">
                        <FaLocationDot size='2rem' style={{color:'#6D95FC'}} />
                    </div>
                    <div className="contacts__item__text p-4">
                        <h5> Office addres</h5>
                        <p>98, Arca St, PR City, 33414 , Indonesia</p>
                    </div>
                </div>
                <div className="contacts__item d-flex align-items-center">
                    <div className="contacts__item__icon">
                        <BsFillTelephoneFill size='2rem' style={{color:'#6D95FC'}} />
                    </div>
                    <div className="contacts__item__text p-4">
                    <h5> Call Us</h5>
                        <p>(+BK) 123 456 7891</p>
                    </div>
                </div>
                <div className="contacts__item d-flex align-items-center">
                    <div className="contacts__item__icon">
                        <GrMail size='2rem' style={{color:'#6D95FC'}} />
                    </div>
                    <div className="contacts__item__text p-4">
                    <h5> Mail Us</h5>
                        <p>info@creaticagency.com</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
            <form className="d-flex flex-column"  action="#" method="post">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name"/>
                <label htmlFor="name">Your email</label>
                <input type="email" id="email"/>
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
