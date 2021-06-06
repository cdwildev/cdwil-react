import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const FooterUI = styled.div`
  display: flex;
  height: 500px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  justify-content: center;
`;

const ContainerUI = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionOne = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const SectionTwo = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: center;
`;

const SectionThree = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: center;
`;

const SectionFour = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: center;
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
          <TextUI style={{ margin: "0 0 48px 0" }}>
            Find us in the Student Commons by the Main Entrance
          </TextUI>
        </SectionOne>
        <SectionTwo>
          <TextUI style={{ width: "420px", margin: "0 0 48px 0" }}>
            The Career Development + Work Integrated learning Office located at
            Emily Carr University of Art + Design. We are situated on the
            unceded, traditional and ancestral territories of thexʷməθkʷəy̓əm
            (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish) and səl̓ilw̓ətaʔɬ
            (Tsleil-Waututh) peoples.{" "}
          </TextUI>
          <TextUI style={{ width: "420px", margin: "0 0 48px 0" }}>
            Made by Students + Alumni{" "}
          </TextUI>
        </SectionTwo>
        <SectionThree>
          <TextUI style={{ width: "100%", margin: "0 0 48px 0", fontWeight: '700' }}>
            Link Lorem Ip <br></br>
            Link Ipsum Sum <br></br>
            Link dolor Amet <br></br>
            Link Amet Con <br></br>
            Link consec <br></br>
            Sitemap Lorem <br></br>
            Link elit sed
          </TextUI>
        </SectionThree>
        <SectionFour>
          <TextUI style={{ textAlign: 'right', width: "100%",  fontWeight: '700' }}>
            Contact 
          </TextUI>
          <TextUI style={{ textAlign: 'right', width: "100%", fontWeight: '400' }}>
            604 884 3843
          </TextUI>
          <TextUI style={{ textAlign: 'right', width: "100%",  fontWeight: '400' }}>
            coop@ecuad.ca
          </TextUI>

        </SectionFour>
      </ContainerUI>
    </FooterUI>
  );
};

export default Footer;
