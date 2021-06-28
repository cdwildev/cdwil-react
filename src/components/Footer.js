import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import FooterImage from "../images/footer.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const FooterUI = styled.div`
  display: flex;
  height: 50vh;
  width: 100vw;
  position: relative;
  bottom: 0;
  justify-content: center;
  padding: 0 0 25vh 0;

`;

const ContainerUI = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1000;
  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const SectionOne = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  justify-content: flex-end;
`;

const SectionTwo = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: flex-end;
  @media (max-width: 1400px) {
    width: 100%;
 
  }
`;


const SectionFour = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: flex-end;

  
  @media (max-width: 1400px) {
    width: 100%
  }
`;

const BoldTitleUI = styled.div`
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 200px;
`;

const TextUI = styled.div`
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  width: 200px;

  @media (max-width: 1400px) {
    width: 100%
  }
`;

export const Footer = ({}) => {
  return (
    <FooterUI>
      <ContainerUI>
        <SectionOne>
          <BoldTitleUI style={{ margin: "0 0 48px 0" }}>
            Emily Carr University of Art + Design
          </BoldTitleUI>
          <TextUI style={{ margin: "0 0 48px 0" }}>
            520 East 1st Avenue Vancouver, BC V5T 0H2, Canada
          </TextUI>
          <TextUI style={{}}>
            Find us in the Student Commons by the Main Entrance
          </TextUI>
        </SectionOne>
        <SectionTwo>
          <TextUI style={{ width: "600px", margin: "0 0 48px 0" }}>
            The Career Development + Work Integrated learning Office located at
            Emily Carr University of Art + Design. We are situated on the
            unceded, traditional and ancestral territories of thexʷməθkʷəy̓əm
            (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish) and səl̓ilw̓ətaʔɬ
            (Tsleil-Waututh) peoples.{" "}
          </TextUI>
          <TextUI style={{ width: "420px" }}>Made by Students + Alumni </TextUI>
        </SectionTwo>

        <SectionFour>
          <TextUI
            style={{ textAlign: "right", width: "100%", fontWeight: "700" }}
          >
            Contact
          </TextUI>
          <TextUI
            style={{ textAlign: "right", width: "100%", fontWeight: "400" }}
          >
            604 884 3843
          </TextUI>
          <TextUI
            style={{
              textAlign: "right",
              width: "100%",
              fontWeight: "400",
              margin: "0 0 48px 0",
            }}
          >
            coop@ecuad.ca
          </TextUI>

          <TextUI
            style={{
              textAlign: "right",
              width: "100%",
              fontWeight: "400",
              margin: "0 0 24px 0",
            }}
          >
            Follow CD+WIL
          </TextUI>
        </SectionFour>
      </ContainerUI>
      <img style={{position: 'absolute', width:"100%", bottom: 0, zIndex: -100}}src={FooterImage}/>
    </FooterUI>
  );
};

export default Footer;
