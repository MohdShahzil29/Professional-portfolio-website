import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GrUserWorker } from "react-icons/gr";
import "react-vertical-timeline-component/style.min.css";
import Tada from "react-reveal/Tada";
import "./style.css";

const Resume = () => {
  return (
    <>
      <ContentWrapper>
        <Tada>
          <h1 className="resume-txt" id="resume">My Resume</h1>
          <div className="resume-content">
            <div className="vertical">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2011 - present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<GrUserWorker />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Creative Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2011 - present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<GrUserWorker />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Creative Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2011 - present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<GrUserWorker />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Creative Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </Tada>
      </ContentWrapper>
    </>
  );
};

export default Resume;
