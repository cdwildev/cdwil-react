import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/career-pathfinder.svg";
import CareerPathways from "./components/CareerPathways/CareerPathways";
import useWindowDimensions from "./helpers/Window";
import DropdownButton from "./components/DropdownButton";
import puzzleOne from "../src/images/puzzle-1.svg";
import puzzleTwo from "../src/images/puzzle-2.svg";
import puzzleThree from "../src/images/puzzle-3.svg";

const ContainerUI = styled.div`
  width: 75vw;

  display: flex;

  @media (max-width: 1400px) {
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


  @media (max-width: 1200px) {
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
  margin: 50px 0 ;
`;


const TileUI = styled.div`
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
      setAllPosts(resources);
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
   
        <ContainerUI style={{ margin: "200px 0 0 0", alignItems: 'center', justifyContent: 'space-between' }}>
          <InfoUI>
            <TitleUI>Career Pathways</TitleUI>

            <BodyTextUI style={{ margin: "50px 0 0 0" }}>
              Discover what careers are connected to each major. Explore the
              many career options available to you, no matter what you studied,
              because spoiler: it’s all connected!
            </BodyTextUI>
          </InfoUI>

          <ImageUI>
            <img src={skillIdentifierImage} />
          </ImageUI>
        </ContainerUI>

        <RowUI
          style={{

            margin: "100px 0 0 0",
          }}
        >
          <ImageContainerUI>
            <img src={puzzleOne} />
            What am I passionate or curious about?
          </ImageContainerUI>

          <ImageContainerUI>
            <img src={puzzleTwo} />
            What are my skills or interests?
          </ImageContainerUI>

          <ImageContainerUI>
            <img src={puzzleThree} />
            What are my workplace values?
          </ImageContainerUI>
        </RowUI>

        <ContainerUI
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "100px 0 200px 0",
          }}
        >
          <BodyTextUI
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Resources
          </BodyTextUI>

          <TileUI 
                    style={{
           
                      margin: "50px 0",
                    }}>

Creative Careers Infographic
                    </TileUI>

          <DropdownButton
          color='white'
          colorActive='#252525'
          border="4px solid white"
          borderActive="4px solid #252525"
          background="white"
            data={resourceData.filter((resource) =>
              resource.category.includes("career-pathfinder")
            )}
            text="Entrepreneurship, Small Businesses and Collectives"
          />
        </ContainerUI>

        <CareerPathways allPostsData={allPostsData} />

    </div>
  );
}
