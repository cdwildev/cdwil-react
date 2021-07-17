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
import BlockContent from '@sanity/block-content-to-react'



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
  grid-template-columns: repeat(1, 1fr);
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

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }

  useEffect(() => {

    const about = JSON.parse(sessionStorage.getItem("about"));

    



    if (about) {
      setAllPosts(about)

    } else{
    sanityClient
      .fetch(
        `*[_type == "about"]{
            title,
            body,
            publishedAt,
            categories,
            mainImage{
              asset->{
                _id, 
                url
              },
              alt
            },
            author,
            slug,
    
            
        }`
      )
      .then((data) => {
        setAllPosts(data);
      })
      .catch(console.error);

    }
  }, []);


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
          <HeroUI alt="A student walking by the Student Services Office at Emily Carr University." src={Office}></HeroUI>
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

      

      <SectionUI style={{ margin: " 0px 0 0 0", flexDirection: "column" }}>
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
          <img alt="A map of the second floor in Emily Carr University’s campus. Pink colour indicates the Career Development + Work Integrated office location." style={{ width: "90%" }} src={Map}></img>
        </RightUI>
      </SectionUI>

      <SectionUI style={{ margin: "0 0 0 0" }}>
        <GridUI style={{ width: "90vw" }}>
        {allPostsData && allPostsData.map(post => <AboutTile
            title={post.title}
            text={<BlockContent projectId="5e3iqbhv" dataset="production" blocks={post.body} serializers={serializers} />}
          />
          )}


        </GridUI>
      </SectionUI>







      <Footer />
    </div>
  );
}
