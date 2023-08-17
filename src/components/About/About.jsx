import React from "react";
import ContentWrapper from "./../ContentWrapper/ContentWrapper";
import techno from "../../images/tech-icons.png";
import Swing from "react-reveal/Swing";
import "./style.css";

const About = () => {
  return (
    <>
      <ContentWrapper>
        <Swing>
          <div className="about-content" id="about">
            <div className="poster">
              <img src={techno} alt="" />
            </div>
            <div className="text">
              <h1 className="about-txt">About Me</h1>
              <p className="info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                magni, beatae consequatur accusamus dolorem veniam cumque cum
                numquam qui tempore maxime a maiores? Aut, praesentium!
              </p>
            </div>
          </div>
        </Swing>
      </ContentWrapper>
    </>
  );
};

export default About;
