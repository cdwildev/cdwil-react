import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import Footer from "./components/Footer";
import moment from "moment";


const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 75vw;
  @media (max-width: 1400px) {
    width: 90vw;
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

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  grid-template-rows: auto auto;
  justify-content: space-between;
  grid-gap: 50px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 75vw;
  align-items: flex-start;

  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-width: 800px) {
  }
`;

const PostUI = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  background: white;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;

  overflow: hidden;
  height: 186px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 90vw;
  }

  &:hover {
    background: #252525;
    color: white;
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
  color: #252525;

  @media (max-width: 1000px) {
  }
`;

const DateUI = styled.div`
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 23px 0;
  color: #252525;

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

&:hover{
  background: #252525;
  color: white;
}
`;


export default function News() {
  const [allPostsData, setAllPosts] = useState([]);

  const [showAllPosts, setShowAllPosts] = useState(1)

  useEffect(() => {

    const news = JSON.parse(sessionStorage.getItem("news"));


    if (news) {
      setAllPosts(news)

    } else{
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
        setAllPosts(data);
      })
      .catch(console.error);

    }
  }, []);

    var postsShown = allPostsData.sort((a, b) => b.publishedAt < a.publishedAt ? -1: 1).slice(0, showAllPosts * 9)


  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <SectionUI style={{margin: '200px 0 0 0'}}>
        <TitleUI style={{margin: '0 0 50px 0'}}> 
          News + <br></br>Events
        </TitleUI>

        <GridUI>
          {allPostsData &&
            postsShown.map((post) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/news/" + post.slug.current}
                key={post.slug.current}
              >
                <PostUI>
                  <img width="120%" src={post.mainImage.asset.url} />
                </PostUI>
                <DateUI>{moment(post.publishedAt).format("MMMM Do YYYY")}</DateUI>
                <VideoTitleUI>{post.title}</VideoTitleUI>
                
              </Link>
            ))}
        </GridUI>




      
      </SectionUI>

      <ShowMoreButtonUI style={{display: postsShown.length >= allPostsData.length ? 'none' : 'flex', margin: '50px 0 0 0'}} onClick={() => setShowAllPosts(showAllPosts + 1)}>Show More</ShowMoreButtonUI>

      <Footer/>
    </div>
  );
}
