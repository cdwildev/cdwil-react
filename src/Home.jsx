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

import useWindowDimensions from "./helpers/Window";

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

  &:hover{
    background: #252525;
    color: white;
  }
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 70px;
  padding: 0 0 10px 0;
  background: linear-gradient(113.03deg, #e01583 31.82%, #1c878c 71.61%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;
  z-index: 1000;

  @media (max-width: 1200px) {
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
  background: #c1d42f;
  filter: blur(50px);
  -webkit-filter: blur(50px);

  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
`;

const GradientUI = styled.div`
  position: absolute;
  width: 40vw;
  height: 20vw;

  background: #c1d42f;
  filter: blur(50px);
  -webkit-filter: blur(100px);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  border-radius: 50px;
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

const LoadingUI = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  left: 0;
  z-index: 10000;
  overflow: hidden;
  transition: 1s ease;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LoadingContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0vh;
  left: 0;
`;

const LoadingGradientUI = styled.div`
  position: absolute;
  width: 300vw;
  height: 300vh;
  left: -100vw;
  top: 0vh;
  border-radius: 100%;
  background: #c1d42f;
  -webkit-filter: blur(50px);
  display: flex;
  transition: 1s ease;
  -webkit-backface-visibility: hidden;
-webkit-perspective: 1000;
`;
const LoadingGradientTwoUI = styled.div`
  position: absolute;
  width: 200vw;
  height: 200vh;

  top: -100vh;
  border-radius: 100%;
  background: #e01583;
  -webkit-filter: blur(50px);
  display: flex;
  animation: rotate 4s ease infinite;
  transition: 1s ease;

  -webkit-backface-visibility: hidden;
-webkit-perspective: 1000;

  @media (max-width: 1100px) {
    width: 150vw;
    height: 250vh;
  }
`;

const LoadingGradientThreeUI = styled.div`
  position: absolute;
  width: 200vw;
  height: 200vh;
  border-radius: 100%;
  background: #00b188;
  top: -100vh;
  left: -100vw;
  -webkit-filter: blur(50px);
  display: flex;
  animation: rotate 4s ease infinite;
  transition: 1s ease;

  -webkit-backface-visibility: hidden;
-webkit-perspective: 1000;

  @media (max-width: 1100px) {
    width: 150vw;
    height: 150vh;
  }
`;

function Home() {
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
        }`
        )
        .then((data) => {
          setAllPosts(data);
          sessionStorage.setItem("videos", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    const news = JSON.parse(sessionStorage.getItem("news"));

    if (news) {

    } else {
      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            body,
            publishedAt,
            categories,
            mainImage{
              asset->{
                _id, 
                url
              },
              alt
            },
            author,
            slug,
    
            
        }`
        )
        .then((data) => {
      
          sessionStorage.setItem("news", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  const [isAnimate, setIsAnimate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [imagesloaded, setImagesLoaded] = useState(0);

  const { height, width } = useWindowDimensions();

  if (imagesloaded > 2) {
    setTimeout(() => {
      setIsAnimate(false);
    }, 500);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (width < 800) {
      setIsAnimate(false);
      setIsLoading(false);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <LoadingUI style={{ display: isLoading ? "flex" : "none" }}>
        <LoadingContainerUI>
          <LoadingGradientUI style={{ top: isAnimate ? "-100vh" : "300vh" }} />
          <LoadingGradientTwoUI style={{ left: isAnimate ? "0vw" : "300vw" }} />
          <LoadingGradientThreeUI
            style={{ left: isAnimate ? "-100vw" : "-300vw" }}
          />
        </LoadingContainerUI>
      </LoadingUI>
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
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <ButtonUI>Learn More</ButtonUI>
          </Link>
        </LeftColumn>
        <RightColumn>
          <ImageGrid>
            <ImageUI
              style={{ width: "100%", gridColumn: "2 / span 8" }}
              src={heroOne}
              onLoad={() => setImagesLoaded(imagesloaded + 1)}
            />

            <ImageUI
              style={{ width: "100%", gridColumn: "1 / span 3" }}
              src={heroTwo}
              onLoad={() => setImagesLoaded(imagesloaded + 1)}
            />

            <ImageUI
              style={{ width: "100%", gridColumn: "5 / span 4" }}
              src={heroThree}
              onLoad={() => setImagesLoaded(imagesloaded + 1)}
            />
          </ImageGrid>
        </RightColumn>
      </SectionUI>

      <SectionUI
        className="section"
        style={{
          margin: "0vh 0 200px 0 ",
          alignItems: "flex-start",
        }}
      >
        <NavGrid />
      </SectionUI>

      <SectionUI
        className="section"
        style={{
          margin: "00px 0 0 0 ",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <GradientUI></GradientUI>
        <GradientMobileUI></GradientMobileUI>
        <GradientUI style={{ left: "0", top: "0", width: "40vw" }}></GradientUI>
        <GradientUI
          style={{ right: "0", bottom: "0", width: "60vw" }}
        ></GradientUI>
        <InspireTitleUI>GET</InspireTitleUI>

        <InspireTitleMobileUI>GET INSPIRED</InspireTitleMobileUI>
        <InspireGrid allPostsData={allPostsData} />
        <InspireTitleUI style={{ textAlign: "right" }}>INSPIRED</InspireTitleUI>
      </SectionUI>

      <Footer/>
    </div>
  );
}

export default Home;
