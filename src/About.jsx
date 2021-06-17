import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import Office from "../src/images/office.png";
import { ContactForm } from "./components/ContactForm";
import Map from "../src/images/map.svg";

export default function About() {
  const [allPostsData, setAllPosts] = useState([]);

  const SectionUI = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: row;
    width: 75vw;
    @media (max-width: 1400px) {
      width: 90vw;
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
    color: #e01583;
    margin: 0 0 24px 0;
  `;

  const HeaderUI = styled.div`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    width: 640px;
    height: 163px;
    text-align: left;
  `;

  const RightUI = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const HeroUI = styled.img`
    width: 40vw;
    max-width: 594px;

    border: 5px solid #252525;
    box-sizing: border-box;
    border-radius: 10px;
  `;

  const AboutUI = styled.div`
    width: 640px;
    height: 174px;
    font-family: Noto Sans;

    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    /* or 136% */

    text-align: center;

    color: #000000;
  `;

  const TileUI = styled.div`
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

    &:hover {
      background: #b9d9eb;
    }
  `;

  const GridUI = styled.div`
    display: grid;

    text-align: left;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 9px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 35px;
    width: 100%;
    width: 75vw;

    @media (max-width: 1000px) {
      grid-template-rows: repeat(9, 1fr);
    }
  `;


  const ContactInfoUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  margin: 0 0 40px 0;
  text-align: left;

`;

const LineBreakUI = styled.div`
border-bottom: 2px solid #252525;
width: 90px;
margin: 0 0 40px 0;
text-align: left;

`;

  return (
    <div className="container">
      <SectionUI>
        <LeftUI>
          <AboutUsUI>About Us</AboutUsUI>
          <HeaderUI>
            The Career Development + Work Integrated Learning Office helps you
            to see and seize your opportunities
          </HeaderUI>
        </LeftUI>
        <RightUI>
          <HeroUI src={Office}></HeroUI>
        </RightUI>
      </SectionUI>

      <SectionUI>
        <AboutUI>
          We offer career advising, clinics and strategy sessions, drop-in and
          individual advising, access to co-op learning opportunities,
          internships and partnerships, as well as the Artswork career portal.
          Follow us on Twitter and check our listings in the Emily Post, Emily
          Carr's bi-weekly internal news and events email, and on the ECU event
          calendar.
        </AboutUI>
      </SectionUI>

      <SectionUI>
        <GridUI style={{ width: "90vw", margin: "200px 0 0 0" }}>
          <TileUI style={{ gridColumn: "1 / span 3", height: "20vh" }}>
            Career <br></br> Advising
          </TileUI>
          <TileUI style={{ gridColumn: "4 / span 3", height: "20vh" }}>
            Programming
          </TileUI>
          <TileUI style={{ gridColumn: "7 / span 3", height: "20vh" }}>
            Resources
          </TileUI>
          <TileUI style={{ gridColumn: "1 / span 3", height: "20vh" }}>
            Co-op/WIL
          </TileUI>
          <TileUI style={{ gridColumn: "4 / span 3", height: "20vh" }}>
            Artswork
          </TileUI>
          <TileUI style={{ gridColumn: "7 / span 3", height: "20vh" }}>
            The Leeway
          </TileUI>
        </GridUI>
      </SectionUI>

      <SectionUI>
        <ContactForm />
      </SectionUI>

      <SectionUI>
        <LeftUI>
          <AboutUsUI>Contact</AboutUsUI>
          <ContactInfoUI>604.844.3843 | coop@ecuad.ca</ContactInfoUI>
          <LineBreakUI/>
          <ContactInfoUI>
            Emily Carr University of Art + Design <br></br>
            520 East 1st Avenue, Vancouver BC V5T 0H2
          </ContactInfoUI>
          <ContactInfoUI>
            Find us in the Student Commons <br></br>
            by the Main Entrance
          </ContactInfoUI>
        </LeftUI>
        <RightUI>
          <img src={Map}></img>
        </RightUI>
      </SectionUI>
    </div>
  );
}
