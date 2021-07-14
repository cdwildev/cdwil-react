import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import Office from "../src/images/office.png";
import { ContactForm } from "./components/ContactForm";
import Map from "../src/images/map.svg";
import JotformEmbed from "react-jotform-embed";
import Footer from "./components/Footer";
import AboutTile from "./components/AboutTile";
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

  @media (max-width: 800px) {
    padding: 10vh 0 0 0;
    justify-content: flex-start;
    align-items: flex-star;
    flex-direction: column;
  }
`;

const LeftUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 90vw;
  }
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
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  width: 640px;

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

const RightUI = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    justify-content: center;
    margin: 100px 0;
  }
`;

const HeroUI = styled.img`
  width: 30vw;
  min-width: 394px;

  border: 4px solid black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 90vw;
    min-width: 90vw;
  }
`;

const AboutUI = styled.div`
  width: 640px;
  height: 174px;
  font-family: Noto Sans;

  font-family: Noto Sans;
  font-style: normal;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  text-align: center;

  color: #000000;

  @media (max-width: 800px) {
    width: 90vw;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
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
    background: #252525;
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 20px;
  }
`;

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  width: 75vw;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
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

const GradientUI = styled.div`
  position: absolute;
  width: 785.08px;
  height: 216.22px;
  left: -200px;
  z-index: -100;

  background: linear-gradient(90deg, #9a57b4 33.37%, #fe2b9e 68.26%);
  filter: blur(100px);
  transform: rotate(11.2deg);
`;

const HighlightUI = styled.div`
  position: absolute;
  width: 78%;
  height: 8px;
  bottom: 0px;
  z-index: -100;
  background: #ede04a;
  opacity: 0.7;
  filter: blur(5px);
  transform: rotate(-0.21deg);
`;

const IframeSectionUI = styled.div`
  position: relative;
  height: 50vh;

  display: flex;
  justify-content: center;
  background: white;
  align-items: center;
  overflow-y: scroll;
  border-radius: 10px;
  width: 75vw;
  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

export default function About() {
  const [allPostsData, setAllPosts] = useState([]);
  return (
    <div className="container">
      <SectionUI style={{ margin: "200px 0 0 0" }}>
        <LeftUI>
          <AboutUsUI>About Us</AboutUsUI>
          <HeaderUI>
            The Career Development + Work Integrated Learning Office helps you
            to see and seize your opportunities
            <HighlightUI></HighlightUI>
          </HeaderUI>
        </LeftUI>
        <RightUI>
          <HeroUI src={Office}></HeroUI>
        </RightUI>
      </SectionUI>

      <SectionUI style={{ margin: "150px 0 150px 0" }}>
        <GradientUI></GradientUI>
        <AboutUI>
          We offer career advising, clinics and strategy sessions, drop-in and
          individual advising, access to co-op learning opportunities,
          internships and partnerships, as well as the Artswork career portal.
          Follow us on Twitter and check our listings in the Emily Post, Emily
          Carr's bi-weekly internal news and events email, and on the ECU event
          calendar.
        </AboutUI>
      </SectionUI>

      <SectionUI style={{ margin: "0 0 0 0" }}>
        <GridUI style={{ width: "90vw" }}>
          <AboutTile
            title="Career Advising"
            text={
              <div>
                Big ideas don't just happen. They are process driven, tested,
                made and re-made and it will be the same with your professional
                career. <br />
                <br /> Emily Carr University is committed to help you transform
                and contextualize your creative practice so that upon graduation
                you are able to deliver value to community, culture, and the
                economy, while - perhaps most importantly - making a meaningful
                life for yourself.
              </div>
            }
          />
          <AboutTile
            title="Programming"
            text={
              <div>
                During the regular academic year, the Career Development + Work
                Integrated Learning Office offers a series of workshops,
                planning and info sessions in a wide range of career-related
                topics.
                <br />
                <br />
                To RSVP for Clinics + Sessions: email us with student name,
                student number, session title and session date.
                <br />
                <br />
                To RSVP for Career Development + Work Integrated Learning
                Events: email us with student name, student number, Event name,
                and Event date.
              </div>
            }
          />
          <AboutTile
            title="Resources"
            text={
              <div>
                The Career Development + Work Integrated Learning Office has put
                together a wide array of resources from PDF guides to online
                info sessions which you can check out here.
              </div>
            }
          />
          <AboutTile
            title="Co-op/WIL"
            text={
              <div>
                As part of our Work Integrated Learning program, ECU offers
                co-op opportunities. In order to be eligible to apply, students
                must meet the following criteria:
                <br />
                <br />
                * Currently enrolled in one of Emily Carr's undergraduate
                programs
                <br />
                * Successfully completed all second year courses
                <br />
                * Minimum 3.0 GPA
                <br />* Minimum of 3 Open Studio Elective credits available in
                their program for every semester of the co-op
              </div>
            }
          />
          <AboutTile
            title="Artswork"
            text={
              <div>
                Find a network of current opportunities head to Artswork where
                you can find jobs, resources, events, announcments and more!
              </div>
            }
          />
          <AboutTile
            title="The Leeway"
            text={
              <div>
                The Leeway is a social and professional networking site where
                you can interact with members of the platform through
                mentorship, connection and collaboration. Fully supported by
                RBC.
                <br />
                <br />
                Through the Leeway, students can connect to alumni to seek
                guidance for their futures as well as:
                <br />
           
                <ul>
                  <li>Seek feedback on their work</li>
                  <li>Find a long or short term mentor</li>
                  <li>Engage in critique groups</li>
                  <li>Promote their events</li>
                </ul>
       
        
                Discover artists willing to collaborate Students can sign up at
                any time in their journey from foundation to convocation. Alumni
                are encouraged to join to connect with their peers and help out
                a student. What are you waiting for? Join today and introduce
                yourself!
              </div>
            }
          />
        </GridUI>
      </SectionUI>

      <SectionUI style={{ margin: " 150px 0 0px 0", flexDirection: "column" }}>
        <ContactForm />
      </SectionUI>

      <SectionUI style={{ margin: "200px 0 200px 0" }}>
        <LeftUI>
          <AboutUsUI>Contact</AboutUsUI>
          <ContactInfoUI>604.844.3843 | coop@ecuad.ca</ContactInfoUI>
          <LineBreakUI />
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
          <img style={{ width: "90%" }} src={Map}></img>
        </RightUI>
      </SectionUI>

      <Footer />
    </div>
  );
}
