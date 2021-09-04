import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Twitter, Instagram } from "react-feather";
import { SiTiktok } from "react-icons/si";



const FooterUI = styled.div`
  display: flex;
 

  width: 100%;
  
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
 
  overflow: hidden;
  padding: 300px 0 100px 0;
width: 100%;
z-index:1;
position: relative;


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

  @media (max-width: 1000px) {

    flex-wrap: wrap;
  }
`;

const SectionOne = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
 }
`;

const SectionTwo = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
 }
`;

const SectionFour = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
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

 
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const TextRightUI = styled.div`
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;

  width: 100%;

  text-align: right;
  @media (max-width: 1000px) {
    text-align: left;
  }
`;

const IconContainerUI = styled.div`
 display: flex;
 justify-content: flex-end;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;


const IconUI = styled.a`
width: 39px;
height: 39px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: #252525;
text-decoration: none;

border: 3px solid #252525;
box-sizing: border-box;
border-radius: 5px;
margin: 12px 0 0 12px ;

@media (max-width: 1000px) {
  margin: 12px 12px 0 0;
}
`;

const LineUI = styled.div`
  border-bottom: 1px solid #252525;
  width: 100px;
`;


const GradientUI = styled.div`
position: absolute;
width: 150%;
height: 100%;
top: 200px;

background: linear-gradient(211.55deg, #00B189 23.15%, #C040BF 43.88%, #FF279C 59%);
animation: 5s ease gradient infinite;
filter: blur(50px);
-webkit-filter: blur(50px);

`


export const Footer = ({}) => {
  return (
    <FooterUI>
      <ContainerUI>
        <SectionOne>
          <BoldTitleUI style={{ margin: "0 0 48px 0" }}>
            Emily Carr University of Art + Design
          </BoldTitleUI>
          <TextUI style={{ margin: "0 0 24px 0" }}>
            520 East 1st Avenue Vancouver, BC V5T 0H2, Canada
          </TextUI>

          <LineUI/>
          <TextUI style={{ margin: "24px 0 0px 0" }}>
            Find us in the Student Commons by the Main Entrance
          </TextUI>
        </SectionOne>
        <SectionTwo>
          <TextUI style={{ maxWidth: "600px", margin: "0 0 24px 0" }}>
          The Career Development + Work Integrated Learning Office is located at Emily Carr University of Art + Design. We are situated on the unceded, traditional and ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish) and səl̓ilw̓ətaʔɬ (Tsleil-Waututh) peoples.
          </TextUI>
          <LineUI/>
          <TextUI style={{ width: "420px", margin: "24px 0 0px 0"  }}>Made by Students + Alumni </TextUI>
        </SectionTwo>

        <SectionFour>
          <TextRightUI style={{ fontWeight: "700" }}>Contact</TextRightUI>
          <TextRightUI>604 884 3843</TextRightUI>
          <TextRightUI>coop@ecuad.ca</TextRightUI>

          <TextRightUI style={{margin:'48px 0  0  0'}}>Follow CD+WIL</TextRightUI>

          <IconContainerUI>

            <IconUI href="https://www.instagram.com/ecucareerswil/" target="_blank">
          <Instagram/>
          </IconUI>
          
          <IconUI href="https://twitter.com/emilycarrcareer?lang=en" target="_blank">
          <Twitter/>
          </IconUI>

          <IconUI href="https://www.tiktok.com/@ecucareerswil?lang=en&is_copy_url=1&is_from_webapp=v1" target="_blank">
          <SiTiktok style={{fontSize:'20px'}}/>
          </IconUI>

          </IconContainerUI>


        </SectionFour>
      </ContainerUI>

      <GradientUI />

    </FooterUI>
  );
};

export default Footer;
