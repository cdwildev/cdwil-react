import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";

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
  font-size: 100px;
  margin: 72px 0;
  background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);
  font-family: "Noto Sans JP", sans-serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }

  animation: gradient 9s ease infinite;
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


export default function News() {
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
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
  }, []);

    console.log(allPostsData)

  console.log(allPostsData);

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
      <SectionUI style={{margin: '100px 0 0 0'}}>
        <TitleUI>
          News + <br></br>Events
        </TitleUI>

        <GridUI>
          {allPostsData &&
            allPostsData.map((post) => (
              <Link
                style={{ textDecoration: "none" }}
                to={"/news/" + post.slug.current}
                key={post.slug.current}
              >
                <PostUI>
                  <img width="120%" src={post.mainImage.asset.url} />
                </PostUI>
                <DateUI>{Date(post.publishedAt).slice(0,15)}</DateUI>
                <VideoTitleUI>{post.title}</VideoTitleUI>
                
              </Link>
            ))}
        </GridUI>
      </SectionUI>
    </div>
  );
}
