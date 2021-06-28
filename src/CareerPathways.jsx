import { useEffect, useState } from "react";
import {SkillIdentifier} from './components/SkillIdentifier/SkillIdentifier';
import sanityClient from './client';
import styled from "styled-components";
import skillIdentifierImage from '../src/images/career-pathways.svg'
import CareerPathways from "./components/CareerPathways/CareerPathways";

const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerUI = styled.div`
  width: 75vw;
  min-height: 100vh;
  display: flex;
  padding: 15vh 0 0 0;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const TitleUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  text-align: left;
  margin: 0 0 35px 0;
  width: 600px;

  @media (max-width: 1200px) {
    font-size: 10vw;
  }
`;

const BodyTextUI = styled.div`
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0 50px 0;
  width: 600px;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

const DetailTextUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const LineBreakUI = styled.div`
  border-bottom: 2px solid white;
  width: 200px;
  margin: 128px 0;
`;

const InfoUI = styled.div`
  width: 60%;


  justify-content: flex-start;
  color: white;
`;

const ImageUI = styled.div`
  width: 40%;


  @media (max-width: 1200px) {
    display: none;
  }
`;


const FormSectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const IframeSectionUI = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
background: white;
align-items: center;

`;


const IframeContainerUI = styled.div`
position: relative;
height: 10vh;
width: 100vw;
display: flex;
justify-content: center;
background: white;
align-items: center;

`;



export default function SkillIdentifierTool() {
  
  
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
  sanityClient
    .fetch(
      `*[_type == "career"]{
          title,
          industry,
          skills,
          values,
      }`
    )
    .then((data) => setAllPosts(data))
    .catch(console.error);
  
}, []);

  

  return (
    <div
      className="container"
      style={{
        overflow: "hidden",
        background:
          "radial-gradient(110.45% 100% at 50% 0%, #C1D42F 0%, #00A8E0 100%)",
      }}
    >
      <SectionUI>
        <ContainerUI>
          <InfoUI>
            <TitleUI>Career Pathways</TitleUI>

            <BodyTextUI>
            Discover what careers are connected to each major. Explore the many career options available to you, no matter what you studied, because spoiler: it’s all connected!

            </BodyTextUI>

 
          </InfoUI>

          <ImageUI>
            <img src={skillIdentifierImage} />
          </ImageUI>
        </ContainerUI>
     


        <CareerPathways allPostsData={allPostsData}/>
        
      </SectionUI>


    </div>
  );
}
