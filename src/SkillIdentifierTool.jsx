import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import Instruction from "./components/Instruction";


const ContainerUI = styled.div`
  width: 75vw;

  display: flex;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const TitleUI = styled.div`
  font-family: "Noto Sans JP", sans-serif;
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
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;

const LineBreakUI = styled.div`
  border-bottom: 2px solid white;
  width: 200px;
  margin: 50px 0;
`;

const InfoUI = styled.div`
  width: 60%;

  justify-content: flex-start;
  color: white;
`;

const ImageUI = styled.div`
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
      <ContainerUI
        style={{
          margin: "200px 0 0 0",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InfoUI>
          <TitleUI>Skill Identifier</TitleUI>

          <BodyTextUI style={{ margin: "50px 0 0 0" }}>
            Explore the skills and software connected to each major. Use this
            tool to understand what is associated with each major and to
            identify the skills you can communicate on your resume/cv when job
            hunting.
          </BodyTextUI>
        </InfoUI>

        <ImageUI>
          <img
            src={skillIdentifierImage}
            alt="Black, white and grey illustration of a student in a black shirt looking through a telescope.The student stands sideways and through the telescope sees the night sky with stars, planets and constellations."
          />
        </ImageUI>
      </ContainerUI>

      

      <ContainerUI
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <DetailTextUI style={{ margin: "50px 0 0 0" }}>
        For the full experience, use this tool on a desktop or laptop. For increased accessibility, use this tool on mobile or half screen.
        </DetailTextUI>
      </ContainerUI>

      <ContainerUI style={{margin: '0 0 100px 0'}}>
    <Instruction video="https://emilycarr.s3.us-east-2.amazonaws.com/skillidentifier-instructions.mov"/>
    </ContainerUI>
      <SkillIdentifier allPostsData={allPostsData} />
    </div>
  );
}
