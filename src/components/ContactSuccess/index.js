import React from "react";
import { ButtonFour } from "../ButtonElement";
import {
  ContactSuccessContainer,
  ContactSuccessWrapper,
  ContactSuccessContent,
  ContactSuccessMessage,
  ContactSuccessBtn,
} from "./ContactSuccessElements";

const ContactSuccess = () => {
  return (
    <ContactSuccessContainer>
      <ContactSuccessWrapper>
        <ContactSuccessContent>
          <h1>Thank you.</h1>
          <ContactSuccessMessage>
            Your message has been successfully sent. I will respond as soon as I
            can.
          </ContactSuccessMessage>
          <ContactSuccessBtn>
            <ButtonFour
              href="https://portfolio-galitgerasimov.netlify.app/"
              primary="true"
              dark="true"
            >
              Back to main page
            </ButtonFour>
          </ContactSuccessBtn>
        </ContactSuccessContent>
      </ContactSuccessWrapper>
    </ContactSuccessContainer>
  );
};

export default ContactSuccess;
