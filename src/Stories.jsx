import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import InspireGrid from "./components/Home/InspireGrid";
import gridOne from "./images/grid-1.png";
import gridTwo from "./images/grid-2.png";
import gridThree from "./images/grid-3.png";
import gridFour from "./images/grid-4.png";
import gridFive from "./images/grid-5.png";
import Dropdown from "./components/Dropdown.js";
import ReactPlayer from "react-player";
import Footer from "./components/Footer";


import React from "react";
import { Player } from "video-react";

const SectionUI = styled.div`

  display: flex;
  width: 75vw;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;


  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const TitleUI = styled.div`
display: flex;
justify-content: flex-start;
text-align: left;
font-weight: 900;
font-size: 100px;
margin: 72px 0;
padding: 0 0 10px 0;
background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);
font-family: "Noto Sans JP", sans-serif;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-overflow: ellipsis;
white-space: nowrap;
display: block;
text-align: left;
animation: gradient 5s ease infinite;

@media (max-width: 1000px) {
  font-size: 10vw;
}

`;

const GridUI = styled.div`
  min-height: 100vh;
  display: grid;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
  grid-template-columns: repeat( auto-fit, minmax(350px, 2fr) );
  grid-gap: 50px;
  @media (max-width: 1200px) {


  }

  @media (max-width: 1000px) {
 

  }
`;

const VideoUI = styled.div`
  margin: 0 0 88px 0;
  @media (max-width: 1000px) {


  }
`;

const VideoTitleUI = styled.div`
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 23px 0;

  @media (max-width: 1000px) {
  }
`;

export default function Stories() {
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {

    const videos = JSON.parse(localStorage.getItem("videos"));

    if(videos){
      setAllPosts(videos)
    } else {
    sanityClient
      .fetch(
        `*[_type == "videos"]{
            title,
            link,
        }`
      )
      .then((data) => {
        setAllPosts(data);
        localStorage.setItem("videos", JSON.stringify(data));
      })
      .catch(console.error);

    }
  }, []);

  console.log(allPostsData);

  return (
    <div className="container">
      <SectionUI style={{ margin: '100px 0 0 0'}}>
        <TitleUI>
          Alumni Stories + <br></br>Career Pathways
        </TitleUI>

        <GridUI>
          {allPostsData.map((video) => (
            <VideoUI>
              <ReactPlayer
                width="100%"
                height="216px"
                style={{ border: "5px solid #252525", borderRadius: "10px", boxSizing: "border-box", position: 'relative'}}
                light={true}
                controls={true}
                url={video.link}
              />
              <VideoTitleUI>{video.title}</VideoTitleUI>
            </VideoUI>
          ))}
        </GridUI>
      </SectionUI>
      <Footer/>
    </div>
  );
}
