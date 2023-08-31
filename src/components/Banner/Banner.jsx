import React from "react";
import "./style.css";
import model from "../../images/model.png";
import model1 from "../../images/model2.png"
import Typewriter from "typewriter-effect";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Roll from 'react-reveal/Roll';

const Banner = () => {
  return (
    <>
      <ContentWrapper>
        <Roll left>
        <div className="banner">
          <div className="text">
            <p className="pragraph">I am a</p>
            <h1 className="main-text">
              <Typewriter
                options={{
                  strings: ["Full Stack Devloper", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="button">
              <button className="btn-hr">Hire me</button>
              <button className="git-btn">Github </button>
            </div>
          </div>

          <div className="model-img">
            <img src={model1} alt="" />
          </div>
        </div>
        </Roll>
      </ContentWrapper>
    </>
  );
};

export default Banner;
