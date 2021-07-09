import { useEffect, useState } from "react";
import {SkillIdentifier} from './components/SkillIdentifier/SkillIdentifier';
import sanityClient from './client';
import styled from "styled-components";
import skillIdentifierImage from '../src/images/skill-identifier.svg'

const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContainerUI = styled.div`
  width: 75vw;
  min-height: 100vh;
  display: flex;
  padding: 200px 0 0 0;

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
  min-height: 100vh;

  justify-content: flex-start;
  color: white;
`;

const ImageUI = styled.div`
  width: 40%;
  min-height: 100vh;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function SkillIdentifierTool() {
  const [allPostsData, setAllPosts] = useState([]);

    useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill"]{
            title,
            slug,
            tags,
            related,
            program,
            category,
            skill,
            mainImage{
              asset->{
              _id,
              url
            }
          }
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
          "radial-gradient(136% 123.14% at 50% 0%, #005695 0%, #008868 100%)",
      }}
    >
      <SectionUI>
        <ContainerUI>
          <InfoUI>
            <TitleUI>Skill Identifier</TitleUI>

            <BodyTextUI>
              Explore the skills and softwares connected to each major. Use this
              tool to understand what is associated with each major and to
              identify the skills you can communicate on your resume/cv when job
              hunting.
            </BodyTextUI>

            <DetailTextUI>
              For the full experience, use this tool on a desktop or laptop.
            </DetailTextUI>

            <LineBreakUI />

            <DetailTextUI style={{ margin: "0 0 24px 0" }}>
              INSTRUCTIONS
            </DetailTextUI>

            <BodyTextUI>
              Use the outer ring to select your degree, then the middle ring to
              select your major. Once both are selected, use the inner ring to
              choose between hard skills, soft skills, and softwares.
            </BodyTextUI>
          </InfoUI>

          <ImageUI>
            <img src={skillIdentifierImage} />
          </ImageUI>
        </ContainerUI>
      </SectionUI>

      <SectionUI>
      <SkillIdentifier allPostsData={allPostsData} />

      </SectionUI>

 
    </div>
  );
}
