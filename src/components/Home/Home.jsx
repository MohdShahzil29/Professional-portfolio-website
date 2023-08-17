import React from "react";
import "./style.css";
import logo from "../../images/Logo2.png";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Rotate from "react-reveal/Rotate";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <ContentWrapper>
        <Rotate top left>
          <div className="homePage">
            <div className="home-content">
              <div className="content">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <ul className="menu">
                  <li>Home</li>
                  <Link to="about" smooth={true} offset={-100} duration={100}>
                    <li>About me</li>
                  </Link>
                  <Link to="resume" smooth={true} offset={-100} duration={100}>
                    <li>Resume</li>
                  </Link>
                  <Link to="project" smooth={true} offset={-100} duration={100}>
                    <li>Project</li>
                  </Link>
                  <Link to="contact" smooth={true} offset={-100} duration={100}>
                  <li>Contact</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Rotate>
      </ContentWrapper>
    </>
  );
};

export default Home;
