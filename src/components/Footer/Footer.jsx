import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import "./style.css"

const footer = () => {
  return (
    <>
      <ContentWrapper>
        
        <div className="footer-content">
          <div className="text">
            <h1 className="brand-name">MSM Portfolio</h1>
            <p className="pragraph-footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            molestiae qui error at inventore,</p>
          </div>
          <div className="social-icons">
            <div className="social-icon">
              <BsFacebook />
            </div>
            <div className="social-icon">
              <AiOutlineInstagram />
            </div>
            <div className="social-icon">
              <AiFillYoutube />
            </div>
            <div className="social-icon">
              <BsTwitter />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default footer;
