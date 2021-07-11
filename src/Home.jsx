import "./App.css";
import { NavGrid } from "./components/Home/NavGrid";
import { InspireGrid } from "./components/Home/InspireGrid";
import { Button } from "./components/Home/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import heroOne from "./images/hero-1.png";
import heroTwo from "./images/hero-2.png";
import heroThree from "./images/hero-3.png";
import footerGradient from "./images/footer.svg";
import buttonBgOne from "./images/bg-1.png";
import buttonBgTwo from "./images/bg-2.png";
import Footer from "./components/Footer";
import sanityClient from "./client";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SectionUI = styled.div`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 75vw;
  

  @media (max-width: 1400px) {
    width: 90vw;
   
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ButtonUI = styled.div`
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
`;

const TitleUI = styled.h1`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  align-items: flex-end;
  padding: 0 0 10px 0;
  font-weight: 900;
  margin: 0;
  font-family: "Noto Sans JP", sans-serif;

  font-size: 56px;
  

  background: linear-gradient(
    113.03deg,
    #e01583 31.82%,
    #1c878c 71.61%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 1200px) {
    animation: gradient 5s ease infinite;
  }
  
  @media (max-width: 1100px) {
    font-size: 48px;
  }

  @media (max-width: 800px) {
    font-size: 10vw;
  }
`;

const SubTitleUI = styled.p`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 480px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 32px;
  position: relative;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    width: 90vw;
  }
`;

const RightColumn = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-end;

  @media (max-width: 800px) {
    display: none;
  }
`;

const ImageGrid = styled.div`
  width: 80%;
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

const GradientMobileUI = styled.div`
position: absolute;
width: 100vw;
height: 50vw;
top: -50px;
left: -10vh;
background: #C1D42F;
filter: blur(100px);
display: none;
@media (max-width: 1100px) {
  display: flex;
}

`;

const GradientUI = styled.div`
position: absolute;
width: 40vw;
height: 20vw;

background: #C1D42F;
filter: blur(100px);
display: flex;
@media (max-width: 1100px) {
  display: none;
}
`;

const InspireTitleUI = styled.div`
font-family: "Noto Sans JP", sans-serif;
font-size: 150px;
font-style: normal;
font-weight: 900;
z-index: 1000;
text-align: left;
color: white;
width: 100%;

@media (max-width: 1100px) {
  display: none;
}

`;

const InspireTitleMobileUI = styled.div`
font-family: "Noto Sans JP", sans-serif;
font-size: 46px;
font-style: normal;
font-weight: 900;
z-index: 1000;
text-align: left;
color: white;
margin 0 0 5vh 0;
display: none;
@media (max-width: 1100px) {
  display: flex;
}

`;


function Home() {
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem("videos"));

    if (videos) {
      setAllPosts(videos);
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <SectionUI
          style={{
            margin: "200px 0 200px 0 ",
            alignItems: "flex-start",
        
          }}
        >
          <LeftColumn>
            <TitleUI>
              Career <br></br> Development <br></br>+ Work Integrated <br></br>
              Learning Office
            </TitleUI>
            <SubTitleUI>
              Connecting students and alumni with local, national and
              international employers in the creative industries and beyond.
            </SubTitleUI>
            <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>
            <ButtonUI>Learn More</ButtonUI>
            </Link>
          </LeftColumn>
          <RightColumn>
            <ImageGrid>
              <ImageUI
                src={heroOne}
                style={{ gridColumn: "2 / span 8", width: "100%" }}
              />
              <ImageUI
                src={heroTwo}
                style={{ gridColumn: "1 / span 3", width: "100%" }}
              />
              <ImageUI
                src={heroThree}
                style={{ gridColumn: "5 / span 4", width: "100%" }}
              />
            </ImageGrid>
          </RightColumn>
        </SectionUI>

        <SectionUI className="section"
                  style={{
                    margin: "0vh 0 200px 0 ",
                    alignItems: "flex-start",
                
                  }}
        >
          <NavGrid />
        </SectionUI>

        <SectionUI className="section"
                          style={{
                            margin: "00px 0 0 0 ",
                            alignItems: "flex-start",
                            flexDirection: 'column'
                        
                          }}>
                                  <GradientUI></GradientUI>
      <GradientMobileUI></GradientMobileUI>
      <GradientUI style={{left: '0', top: '0', width: '40vw'}}></GradientUI>
      <GradientUI style={{right: '0', bottom: '0', width: '60vw'}}></GradientUI>
<InspireTitleUI>GET</InspireTitleUI>

<InspireTitleMobileUI>GET INSPIRED</InspireTitleMobileUI>
          <InspireGrid allPostsData={allPostsData} />
          <InspireTitleUI style={{textAlign: 'right'}}>INSPIRED</InspireTitleUI>
          
        </SectionUI>
        
      </div>

  );
}

export default Home;
