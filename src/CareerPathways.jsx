import { useEffect, useState } from "react";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/career-pathfinder.svg";
import CareerPathways from "./components/CareerPathways/CareerPathways";
import DropdownButton from "./components/DropdownButton";
import puzzleOne from "../src/images/puzzle-1.svg";
import puzzleTwo from "../src/images/puzzle-2.svg";
import puzzleThree from "../src/images/puzzle-3.svg";
import Instruction from "./components/Instruction";


const ContainerUI = styled.div`
  width: 75vw;

  display: flex;

  @media (max-width: 1500px) {
    width: 90vw;
  }
`;

const RowUI = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75vw;

  display: flex;
  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
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
  color: white;
  width: 600px;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

const InfoUI = styled.div`
  width: 60%;

  justify-content: flex-start;
  color: white;
`;

const ImageUI = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;

const ImageContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Noto Sans;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  width: 300px;
  color: #426610;
  margin: 50px 0;
`;

const TileUI = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid white;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 0 50px;
  cursor: pointer;
  color: white;
  width: 50%;
  text-decoration: none;

  &:hover {
    background: white;
    color: #252525;
    border: 4px solid #252525;
  }

  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 20px;
    width: 100%;
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

  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    const resources = JSON.parse(sessionStorage.getItem("resources"));

    if (resources) {
      setResourceData(resources);
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
          setResourceData(data);
          sessionStorage.setItem("resources", JSON.stringify(data));
        })
        .catch(console.error);
    }
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
      <ContainerUI
        style={{
          margin: "200px 0 0 0",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InfoUI>
          <TitleUI>Career Pathfinder</TitleUI>

          <BodyTextUI style={{ margin: "50px 0 0 0" }}>
          Explore your career interests and discover which careers are connected to each major. This tool helps you explore career options by guiding you through the following questions:

          </BodyTextUI>

          <DetailTextUI style={{ margin: "50px 0 0 0" }}>
        For the full experience, use this tool on a desktop or laptop. For increased accessibility, use this tool on mobile or half screen.
        </DetailTextUI>
        </InfoUI>

        <ImageUI>
          <img
            src={skillIdentifierImage}
            alt="Black, white and grey illustration of a student in a black shirt looking through binoculars. A large three arrow sign post is behind the student and a stone pathway is in front."
          />
        </ImageUI>
      </ContainerUI>

     

      <RowUI
        style={{
          margin: "100px 0 0 0",
        }}
      >
        <ImageContainerUI>
          <img
            src={puzzleOne}
            alt="Illustration in black of a hand holding a white puzzle piece. The hand is coming through a black circle shaped hole."
          />
          What am I passionate or curious about?
        </ImageContainerUI>

        <ImageContainerUI>
          <img
            src={puzzleTwo}
            alt="Illustration in black of a hand holding a white puzzle piece. The hand is coming through a black circle shaped hole."
          />
          What are my skills or interests?
        </ImageContainerUI>

        <ImageContainerUI>
          <img
            src={puzzleThree}
            alt="Illustration in black of a hand holding a white puzzle piece. The hand is coming through a black circle shaped hole."
          />
          What are my workplace values?
        </ImageContainerUI>
      </RowUI>

      <ContainerUI style={{margin: '0 0 100px 0'}}>
    <Instruction video="https://emilycarr.s3.us-east-2.amazonaws.com/careerpathfinder-instructions.mov" />
    </ContainerUI>
    
      <CareerPathways allPostsData={allPostsData} />

      <ContainerUI
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "100px 0 100px 0",
        }}
      >
        <BodyTextUI
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          Resources | View links or skip to use the pathfinder tool below
        </BodyTextUI>

        <TileUI
          target="_blank"
          href="https://miro.com/app/board/o9J_lUGDhE8=/"
          style={{
            margin: "50px 0 10px 0",
          }}
        >
          Creative Careers Infographic
        </TileUI>

        <DropdownButton
          color="white"
          colorActive="#252525"
          border="4px solid white"
          borderActive="4px solid #252525"
          background="white"
          data={resourceData.filter((resource) =>
            resource.category.includes("career-pathfinder")
          )}
          text="Helpful Links"
        />
      </ContainerUI>



    </div>
  );
}
