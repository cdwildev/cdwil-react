import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import sanityClient from "../../client";

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(30%, 2fr));
  grid-template-rows: auto auto;
  justify-content: space-between;
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  width: 75vw;
  align-items: flex-start;


  @media (max-width: 1400px) {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(40%, 2fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 2fr));
  }
`;
const VideoUI = styled.div`
  height: 186px;
  position: relative;
  gridcolumn: span 2;
  width: 100%;
  border: 5px solid #252525;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 1200px) {
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const TileUI = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: white;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 22px;
  overflow: hidden;
  height: 186px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 800px) {
    width: 90vw;
    font-size: 18px;
  }

  &:hover {
    background: #252525;
    color: white;
  }
`;

export const InspireGrid = ({
  showPost,
  setShowPost,
  data,
  color = "white",
}) => {

  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const videos = JSON.parse(sessionStorage.getItem("videos"));

    if (videos) {
      setAllPosts(videos);
    } else {
      sanityClient
        .fetch(
          `*[_type == "videos"]{
            title,
            publishedAt,
            link,
        }`
        )
        .then((data) => {
          setAllPosts(data.sort((a, b) => b.publishedAt < a.publishedAt ? -1: 1));
          sessionStorage.setItem("videos", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  return (
  


    <GridUI>
      {allPostsData.slice(0, 5).map((video) => (
        <VideoUI key={video.title}>
          <ReactPlayer
            width="100%"
            height="100%"
            light={true}
            controls={true}
            url={video.link}
          />
        </VideoUI>
      ))}

<Link
          style={{ textDecoration: "none", color: '#252525', zIndex: '100'}}
          to="/stories"
        >
      <TileUI style={{ border: "5px solid #252525", borderRadius: "10px" }}>
        More Videos
      </TileUI>

      </Link>
    </GridUI>
    

 
  );
};

export default InspireGrid;
