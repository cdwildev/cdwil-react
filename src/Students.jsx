import { useState } from "react";

import styled from "styled-components";
import Hero1 from "../src/images/alumni-hero-1.png";
import Hero2 from "../src/images/alumni-hero-2.png";
import { ContactFormTwo } from "./components/ContactFormTwo";

import InspireGrid from "./components/Home/InspireGrid";

import Footer from "./components/Footer";

const SectionUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  width: 75vw;

  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-height: 800px) {
    padding: 10vh;
  }
`;

const LeftUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

const AboutUsUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #00b188;
  margin: 0 0 24px 0;
`;

const HeaderUI = styled.div`
  font-family: Noto Sans;
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  width: 640px;
  margin: 0 0 48px;
  text-align: left;

  @media (max-width: 1200px) {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    width: 343px;
  }
`;

const InfoContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 620px;
  text-align: left;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 26px 0;

  @media (max-width: 800px) {
    width: 90vw;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

const GradientHeaderUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 55px;
  background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  padding: 0 0 50px 0;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  @media (min-width: 1200px) {
    animation: gradient 5s ease infinite;
  }

  @media (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const RightUI = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const TileUI = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 22px;
  cursor: pointer;
  background: white;
  color: #252525;
  text-decoration: none;

  &:hover {
    background: #00b188;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const TileBlueUI = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 22px;
  cursor: pointer;
  background: white;
  color: #252525;
  text-decoration: none;

  &:hover {
    background: #00a8e0;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;

  width: 100%;

  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridTwoUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;

  width: 50vw;
  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 20px;
    grid-template-columns: repeat(1, 1fr);

    width: 90vw;
  }
`;

const ImageGrid = styled.div`
  width: 90%;
  min-width: 250px;
  display: grid;
  grid-template-columns: repeat(8, auto);
  justify-items: end;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

const ImageUI = styled.img`
  border: 4px solid black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  max-width: 533px;

  max-height: 339px;
  border-radius: 10px;
`;

const GradientOneUI = styled.div`
  position: absolute;
  width: 785.08px;
  height: 291.77px;
  background: linear-gradient(111.11deg, #00d1a1 25.33%, #0069b6 75.02%),
    linear-gradient(90deg, #c1d42f 0%, #00a8e0 100%);
  filter: blur(150px);
  transform: rotate(11.2deg);
  z-index: -100;
  right: -300px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const GradientTwoUI = styled.div`
  position: absolute;
  width: 505.37px;
  height: 177.41px;
  background: linear-gradient(111.11deg, #00d1a1 25.33%, #0069b6 75.02%),
    linear-gradient(90deg, #c1d42f 0%, #00a8e0 100%);
  filter: blur(150px);
  transform: rotate(158.09deg);
  z-index: -1000;
  left: -300px;
`;

const HighlightUI = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  bottom: 0px;
  right:0;
  z-index: -100;
  background: #ede04a;
  opacity: 0.7;
  filter: blur(5px);
  transform: rotate(-0.21deg);
`;


export default function About() {

  return (
    <div className="container">
      <SectionUI style={{ margin: "150px 0 150px 0" }}>
        <LeftUI>
          <AboutUsUI>For Alumni</AboutUsUI>
          <HeaderUI>
            Hey Alumni! <br></br>
            These resources <br></br>
            are for            
            <span style={{position: 'relative'}}> you too!
            <HighlightUI></HighlightUI>
            </span>
          </HeaderUI>

          <InfoContainerUI>
            Subject to availability, contact the Career Development + WIL Office
            at coop@ecuad.ca to schedule an individual appointment on career
            advising, resume reviews, or grad school preparations
          </InfoContainerUI>
          <InfoContainerUI>
            You can also visit Artswork for creative opportunities, the Leeway
            for mentorship and networking opportunities and the Alumni
            Association for other perks.{" "}
          </InfoContainerUI>
        </LeftUI>
        <RightUI>
          <ImageGrid>
            <ImageUI
              src={Hero2}
              style={{ gridColumn: "1 / span 4", width: "100%" }}
            />
            <ImageUI
              src={Hero1}
              style={{ gridColumn: " 3 / span 4", width: "100%" }}
            />
          </ImageGrid>
        </RightUI>
        <GradientOneUI />
      </SectionUI>

      <SectionUI style={{ margin: "0 0 150px 0", flexDirection: "column" }}>
        <GridUI style={{ margin: "0 0 10px 0" }}>
          <TileUI target="_blank" href="https://artswork.ecuad.ca/">
            Artswork
          </TileUI>
          <TileUI target="_blank" href="https://theleeway.ca/">
            The Leeway
          </TileUI>
          <TileUI target="_blank" href="https://www.ecuaa.ca/">
            Alumni <br></br> Association
          </TileUI>
        </GridUI>
        <ContactFormTwo />
      </SectionUI>

      <SectionUI style={{ minHeight: "60vh" }}>
        <LeftUI>
          <AboutUsUI>For Non-ECU Students</AboutUsUI>
          <HeaderUI>
            Not a student? <br></br>
            <span style={{position: 'relative'}}> Not a problem!
            <HighlightUI></HighlightUI>
            </span>
          </HeaderUI>

          <InfoContainerUI>
            Feel free to enjoy and share these resources! If you are interested
            in studying at Emily Carr University or would like information on
            teen programs, Indigenous youth programs, continuing studies or grad
            studies, visit the main website or join Emix, our public university
            newsletter sent every two weeks. Subscribe for news, events,
            exhibitions and employment opportunities.
          </InfoContainerUI>
        </LeftUI>
      </SectionUI>

      <SectionUI style={{ margin: "0 0 200px 0", flexDirection: "column" }}>
        <GradientTwoUI />
        <GridTwoUI style={{ margin: "0 0 30px 0" }}>
          <TileBlueUI
            target="_blank"
            href="https://mailchi.mp/ecuad.ca/emix-subscribe"
            style={{ gridColumn: "1 / span 2" }}
          >
            Emix <br></br> Newsletter
          </TileBlueUI>
          <TileBlueUI
            target="_blank"
            href="https://www.ecuad.ca/"
            style={{ gridColumn: "3 / span 2" }}
          >
            Emily Carr <br></br> Website
          </TileBlueUI>
          <TileBlueUI
            target="_blank"
            href="https://www.instagram.com/emilycarr_sas/?hl=en"
            style={{ gridColumn: "1 / span 4" }}
          >
            Emily Carr Student Art Sale
          </TileBlueUI>
        </GridTwoUI>
      </SectionUI>

      <SectionUI style={{ margin: "0 0 0 0", flexDirection: "column" }}>
        <GradientHeaderUI>
          Alumni Stories <br></br>
          and Career Pathways
        </GradientHeaderUI>

        <InspireGrid />
      </SectionUI>

      <Footer />
    </div>
  );
}
