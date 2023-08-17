import React from "react";
import "./style.scss";
import ContactInfo from "./contact-info";
import Jello from "react-reveal/Jello";
import Form from "./form";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Contact = () => {
  return (
    <ContentWrapper>
      <Jello>
        <h1 className="contact-txt" id="contact">Contact us</h1>
        <div className="contact-content-wrapper">
          <ContactInfo />
          <Form />
        </div>
      </Jello>
    </ContentWrapper>
  );
};

export default Contact;
