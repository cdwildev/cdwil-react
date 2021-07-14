import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import Office from "../src/images/office.png";
import { ContactFormTwo } from "./components/ContactFormTwo";
import Map from "../src/images/map.svg";
import Hero1 from "../src/images/employer-hero-1.png";
import Hero2 from "../src/images/employer-hero-2.png";
import InspireGrid from "./components/Home/InspireGrid";
import Footer from "./components/Footer";
import DropdownButton from "./components/DropdownButton";



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
animation: gradient 5s ease infinite;

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

const InfoPackageUI = styled.a`
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
color: #252525;

text-decoration: none;

&:hover {
 background: #00A8E0;

}

@media (max-width: 800px) {
  font-size: 18px;
  line-height: 20px;
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
color: #252525;

text-decoration: none;

&:hover {
  background: #00B188;
}

@media (max-width: 800px) {
  font-size: 18px;
  line-height: 20px;
}
`;

const GridUI = styled.div`
display: grid;

text-align: left;
grid-template-columns: repeat(9, 1fr);
grid-gap: 10px;
font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 35px;

width: 100%;
`;

const GridTwoUI = styled.div`
display: grid;

text-align: left;
grid-template-columns: repeat(8, 1fr);
grid-gap: 9px;
font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 35px;

width: 50vw;
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

const HighlightUI = styled.div`
position: absolute;
width: 55%;
height: 8px;
bottom: 0px;
z-index: -100;
background: #ede04a;
opacity: 0.7;
filter: blur(5px);
transform: rotate(-0.21deg);
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


export default function About() {

  const [allPostsData, setAllPosts] = useState([]);
  useEffect(() => {

    const resources = JSON.parse(sessionStorage.getItem("resources"));

    if(resources){
      setAllPosts(resources)
    } else {
    sanityClient
      .fetch(
        `*[_type == "resources"]{
          title,
          description,
          category,
          link,
      }`
      )
      .then((data) => {
        setAllPosts(data);
        sessionStorage.setItem("resources", JSON.stringify(data));
      })
      .catch(console.error);

    }
  }, []);



  return (
    <div className="container">
      <SectionUI style={{ margin: "150px 0 100px 0" }}>
        <LeftUI>
          <AboutUsUI>For Employers</AboutUsUI>
          <HeaderUI>
            Interested in <br></br>hiring a student?
            <HighlightUI />
          </HeaderUI>

          <InfoContainerUI>
            Contact us at coop@ecuad.ca or visit Artswork to either post your
            opportunity or view student and alumni portfolios.
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

      <SectionUI style={{ margin: "0px 0 50px 0", flexDirection: "column" }}>
        <div style={{ margin: "0 0 30px 0", display: 'grid' }}>
          <InfoPackageUI style={{  width: "50vw" }}>
          Employer
Info Package
          </InfoPackageUI>
        </div>
      </SectionUI>

      <SectionUI style={{ margin: "50px 0 200px 0", flexDirection: "column" }}>
        <GridUI
          style={{
            margin: "0 0 10px 0",
            gridTemplateColumns: "repeat(10, 1fr)",
          }}
        >
          <TileUI style={{ gridColumn: "1 / span 4"}} target="_blank" href="https://shumka.ecuad.ca/program/design-for-startups/">
            Design <br></br>
            for Startups
          </TileUI>
          <TileUI style={{ gridColumn: "5 / span 6"}} target="_blank" href="https://research.ecuad.ca/livinglabs/the-shumka-centre/art-apprenticeship-network/">
            Artist Apprenticeship Network
          </TileUI>
          <TileUI style={{ gridColumn: "1 / span 5"}} target="_blank" href="https://research.ecuad.ca/healthdesignlab/about/">
            Health Design Lab
          </TileUI>
          <TileUI style={{ gridColumn: "6 / span 5" }} target="_blank" href="https://www.ecuad.ca/academics/research-area/research-centres/ecugoodmedia">
            Basically Good Media Lab
          </TileUI>
        </GridUI>

        <DropdownButton data = {allPostsData.filter(resource => resource.category.includes('funding'))} text = "Funding Resources to Hire Students"/>
      </SectionUI>

      <SectionUI style={{ flexDirection: "column" }}>
        <GradientHeaderUI>
          Alumni Stories <br></br>
          and Career Pathways
        </GradientHeaderUI>

        <InspireGrid />
       
      </SectionUI>


      <Footer/>
    </div>
  );
}
