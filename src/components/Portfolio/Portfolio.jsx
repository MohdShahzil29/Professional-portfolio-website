import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../../images/Project-image1.png";
import Wobble from "react-reveal/Wobble";
import "./style.css";

const Portfolio = () => {
  return (
    <>
      <ContentWrapper>
        <Wobble>
          <div className="container project" id="project">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
              Explore My Project
            </h2>
            <hr />
            <p className="pb-3 text-center">
              😎"Embark on a Journey Through My Projects 🚀 Discover a selection
              of my work, complete with live links and source code."
            </p>
            {/* card design */}
            <div className="row" id="project">
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notigy-badge">Full Stack</span>
                    <img src={Img} alt="Project" />

                    <div className="card-image-overly mt-3">
                      <span className="card-detail-badge"> React js </span>
                      <span className="card-detail-badge">React Redux</span>
                    </div>
                    <div className="card-body">
                      <div className="ad-title">
                        <h5 className="text-uppercase">
                          MovieX Website Project
                        </h5>
                      </div>
                      <div className="btn">
                        <a
                          href="https://movie-website-apn3.vercel.app/"
                          target="_blank"
                          className="btn-card"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohdShahzil29/Movie-website"
                          target="_blank"
                          className="btn-card"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notigy-badge">Full Stack</span>
                    <img src={Img} alt="Project" />

                    <div className="card-image-overly mt-3">
                      <span className="card-detail-badge"> React js </span>
                      <span className="card-detail-badge">React Redux</span>
                    </div>
                    <div className="card-body">
                      <div className="ad-title">
                        <h5 className="text-uppercase">
                          MovieX Website Project
                        </h5>
                      </div>
                      <div className="btn">
                        <a
                          href="https://movie-website-apn3.vercel.app/"
                          target="_blank"
                          className="btn-card"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohdShahzil29/Movie-website"
                          target="_blank"
                          className="btn-card"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notigy-badge">Full Stack</span>
                    <img src={Img} alt="Project" />

                    <div className="card-image-overly mt-3">
                      <span className="card-detail-badge"> React js </span>
                      <span className="card-detail-badge">React Redux</span>
                    </div>
                    <div className="card-body">
                      <div className="ad-title">
                        <h5 className="text-uppercase">
                          MovieX Website Project
                        </h5>
                      </div>
                      <div className="btn">
                        <a
                          href="https://movie-website-apn3.vercel.app/"
                          target="_blank"
                          className="btn-card"
                        >
                          Demo
                        </a>
                        <a
                          href="https://github.com/MohdShahzil29/Movie-website"
                          target="_blank"
                          className="btn-card"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wobble>
      </ContentWrapper>
    </>
  );
};

export default Portfolio;
