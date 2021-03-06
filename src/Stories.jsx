import { useEffect, useState } from "react";
import sanityClient from "./client";
import styled from "styled-components";
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
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

const ShowMoreButtonUI = styled.div`
  width: 160px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid black;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  margin: 20px 0 0 0;
  cursor: pointer;

  &:hover {
    background: #252525;
    color: white;
  }
`;

export default function Stories() {
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
            link,
            publishedAt,
        }`
        )
        .then((data) => {
          setAllPosts(
            data.sort((a, b) => (a.title < b.title ? -1 : 1))
          );
          sessionStorage.setItem("videos", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  console.log(allPostsData);

  const [showAllPosts, setShowAllPosts] = useState(1);

  var postsShown = allPostsData.slice(0, showAllPosts * 9);

  return (
    <div className="container">
      <SectionUI style={{ margin: "100px 0 0 0" }}>
        <TitleUI>
          Alumni Stories + <br></br>Career Pathways
        </TitleUI>

        <GridUI>
          {allPostsData &&
            postsShown.map((video) => (
              <VideoUI>
                <ReactPlayer
                  width="100%"
                  height="216px"
                  style={{
                    border: "5px solid #252525",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                    position: "relative",
                  }}
                  light={true}
                  controls={true}
                  url={video.link}
                />
                <VideoTitleUI>{video.title}</VideoTitleUI>
              </VideoUI>
            ))}
        </GridUI>
      </SectionUI>

      <ShowMoreButtonUI
        style={{
          display: postsShown.length >= allPostsData.length ? "none" : "flex",
          margin: "50px 0 0 0",
        }}
        onClick={() => setShowAllPosts(showAllPosts + 1)}
      >
        Show More
      </ShowMoreButtonUI>

      <Footer />
    </div>
  );
}
