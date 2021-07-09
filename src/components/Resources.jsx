import { useEffect, useState } from "react";
import sanityClient from "../client";
import styled from "styled-components";



const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  width: 75vw;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10vh 0 0 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 90vw;
  }
  
`;

const InfoContainerUI = styled.div`

display: flex;
justify-content: flex-start;
align-items: flex-start;

min-width: 75vw;
text-align: left;
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
margin: 64px 0 160px 0;

@media (max-width: 1200px) {
  flex-direction: column;
  
}


`

const LeftColumn = styled.div`
width: 420px;
margin: 0 64px 0 0;
@media (max-width: 1000px) {

  margin: 0 0 64px 0;

  width: 100%;
}

`;

const RightColumn = styled.div`
  width: 318px;

  @media (max-width: 1000px) {
 
  
    width: 100%;
  }
`;

const HeroOneUI = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const HeroTwoUI = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 120px;
  background: linear-gradient(111.11deg, #03A27D 25.33%, #005695 75.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }

  animation: gradient 9s ease infinite;


  
`;

const HeaderUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  height: 150px;
  font-weight: 900;
  margin: 200px 0 0 0 ;
  text-align: left;
  width: 100%;
  
  font-size: 56px;
  background: linear-gradient(257.7deg, #21B592 47.29%, #005695 92.38%);

  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  
  @media (max-width: 1200px) {

  font-size: 55px
  height: 200px;
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
  top: -55px;
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

&:hover{
  background: #B9D9EB;
}

`;

const FlexUI = styled.div`
  display: flex;
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
  width: 100%;
  width: 75vw;

  @media (max-width: 1000px) {

    grid-template-rows: repeat(2, 1fr);
    
  }


`

const TileImageUI = styled.div`

  height: 30vh;

  background: white;
    border: 4px solid #252525;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
  

`;


const ImageUI = styled.img`

flex-shrink: 0;

min-height: 100%

`;

export default function StoryGrid() {
  const [allPostsData, setAllPosts] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  

  useEffect(() => {

    const videos = JSON.parse(localStorage.getItem("videos"));

    if(videos){
      setAllVideos(videos)
    } else {
    sanityClient
      .fetch(
        `*[_type == "videos"]{
            title,
            link,
        }`
      )
      .then((data) => {
        setAllVideos(data);
        localStorage.setItem("videos", JSON.stringify(data));
      })
      .catch(console.error);

    }
  }, []);



  return (
  <div className="container">



    <GridUI style={{width: '90vw', margin: '200px 0 0 0' }}>
     
      <TileUI style={{gridColumn: '1 / span 3', height: '20vh'}}>Aboriginal <br></br> Gathering Place</TileUI>
      <TileUI style={{gridColumn: '4 / span 3', height: '20vh'}}>Emily Carr <br></br> University Library</TileUI>
      <TileUI style={{gridColumn: '7 / span 3', height: '20vh'}}>Alumni <br></br> Association</TileUI>
      <TileUI style={{gridColumn: '1 / span 4', height: '20vh'}}>Emily Carr <br></br> Writing Centre</TileUI>
      <TileUI style={{gridColumn: '5 / span 5', height: '20vh'}}>Shumka Centre for <br></br> Creative Entrepreneurship</TileUI>
    </GridUI>

  




  </div>
  )
}
