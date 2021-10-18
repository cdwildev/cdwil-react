import { useEffect, useState } from "react";

import sanityClient from "./client";
import styled from "styled-components";

import InspireGrid from "./components/Home/InspireGrid";

import Dropdown from "./components/Dropdown.js";
import Footer from "./components/Footer";
import Alumni from "./Alumni";

const SectionUI = styled.div`
  display: flex;
  width: 75vw;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-width: 800px) {
    padding: 50px 0 0 0;
  }
`;

const InfoContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 846px;

  text-align: left;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin: 50px 0 100px 0;

  @media (max-width: 800px) {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 120px;
  background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }
`;

const HeaderUI = styled.div`
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
    background: #b9d9eb;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 20px;
  
  }
`;

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;

  width: 75vw;

  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 20px;
    grid-template-rows: repeat(1, 1fr);
    display: none;
  }
`;

const MobileGridUI = styled.div`
  display: none;

  text-align: left;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  width: 90vw;
  font-size: 22px;
  @media (max-width: 1000px) {
    display: grid;
    font-size: 18px;
  }
`;

const LinkUI = styled.a`
  text-decoration: none;
  color: #252525;
`;

export default function Resources() {
  const [allPostsData, setAllPosts] = useState([]);

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
          "pdfURL": pdf.asset->url
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
      <SectionUI style={{ margin: "200px 0 0 0", alignItems: "flex-start" }}>
        <TitleUI>Resources</TitleUI>

        <InfoContainerUI>
          The resources listed here are a complied list from a mix of sources.
          Half of the links contain downloadable PDF resources provided by the
          Career Development + WIL Office. The other half will link to other
          parts of the University including the Writing Centre, the Alumni
          Association, the Aboriginal Gathering Place, the Shumka Centre, and
          the Library. While a few others will redirect you to local
          organizations with great relevant resources.
        </InfoContainerUI>

        <Dropdown allPostsData={allPostsData}></Dropdown>
      </SectionUI>

      <SectionUI style={{ margin: "150px 0 0 0" }}>
        <HeaderUI>
          Alumni Stories <br></br>
          and Career Pathways
        </HeaderUI>

        <InspireGrid></InspireGrid>
      </SectionUI>

      <SectionUI style={{ width: "90vw", margin: "200px 0 0 0" }}>
        <GridUI style={{ width: "90vw" }}>
          <LinkUI
            style={{ gridColumn: "1 / span 3" }}
            target="_blank"
            href="https://www.ecuad.ca/on-campus/agp"
          >
            <TileUI>
              Aboriginal <br></br> Gathering Place
            </TileUI>
          </LinkUI>
          <LinkUI
            style={{ gridColumn: "4 / span 3" }}
            target="_blank"
            href="https://www.ecuad.ca/library"
          >
            <TileUI>
              Emily Carr <br></br> University Library
            </TileUI>
          </LinkUI>
          <LinkUI
            style={{ gridColumn: "7 / span 3" }}
            target="_blank"
            href="https://www.alumni.ubc.ca/"
          >
            <TileUI>
              Alumni <br></br> Association
            </TileUI>
          </LinkUI>
          <LinkUI
            style={{ gridColumn: "1 / span 4" }}
            target="_blank"
            href="https://writingcentre.ecuad.ca/"
          >
            <TileUI>
              Emily Carr <br></br> Writing Centre
            </TileUI>
          </LinkUI>
          <LinkUI
            style={{ gridColumn: "5 / span 5" }}
            target="_blank"
            href="https://shumka.ecuad.ca/"
          >
            <TileUI>
              Shumka Centre for <br></br> Creative Entrepreneurship
            </TileUI>
          </LinkUI>
        </GridUI>

        <MobileGridUI>
          <LinkUI target="_blank" href="https://www.ecuad.ca/on-campus/agp">
            <TileUI style={{}}>Aboriginal Gathering Place</TileUI>
          </LinkUI>

          <LinkUI target="_blank" href="https://www.ecuad.ca/library">
            <TileUI style={{}}>Emily Carr University Library</TileUI>
          </LinkUI>

          <LinkUI target="_blank" href="https://www.alumni.ubc.ca/">
            <TileUI style={{}}>Alumni Association</TileUI>
          </LinkUI>

          <LinkUI target="_blank" href="https://writingcentre.ecuad.ca/">
            <TileUI style={{}}>Emily Carr Writing Centre</TileUI>
          </LinkUI>

          <LinkUI
            style={{ textDecoration: "none", gridColumn: "1 / span 2" }}
            target="_blank"
            href="https://shumka.ecuad.ca/"
          >
            <TileUI style={{}}>
              Shumka Centre for Creative Entrepreneurship
            </TileUI>
          </LinkUI>
        </MobileGridUI>
      </SectionUI>
<Footer/>

     
    </div>
  );
}
