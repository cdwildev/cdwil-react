import { useEffect, useState } from "react";

import sanityClient from "./client";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "./components/Footer";
import moment from "moment";

import useWindowDimensions from "./helpers/Window";
import PortableText from "react-portable-text";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}

const SectionUI = styled.div`
  margin: 100px 0 0 0;
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
  font-size: 48px;
  width: 100%;
  margin: 100px 0 50px 0;

  background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);

  height: 100%;
  -webkit-background-clip: text;

  text-overflow: ellipsis;

  display: block;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

const BodyUI = styled.div`
  font-family: Noto Sans;
  line-height: 25px;
  object-fit: contain;
  text-decoration: none;

  width: 50vw;

  @media (max-width: 1000px) {
    width: 90vw;
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

export default function Post(props) {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
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
        setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

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
      <SectionUI>
        <TitleUI>{singlePost && singlePost.title}</TitleUI>

        <img width="100%" src={singlePost && singlePost.mainImage.asset.url} />

        <DateUI>
          Posted on{" "}
          {singlePost && moment(singlePost.publishedAt).format("MMMM Do YYYY")}
        </DateUI>

        <BodyUI>
          {singlePost && (
            <PortableText
              // Pass in block content straight from Sanity.io
              content={singlePost.body}
              projectId="5e3iqbhv"
              dataset="production"
              imageOptions={{
                w: width < 400 ? 300 : 800,
                fit: "max",
                h: 500,
                margin: 0,
              }}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                link: (props) => <a style={{ color: "#244468" }} {...props} />,
              }}
            />
          )}

          {/*     {singlePost && <BlockContent  imageOptions={{ w: width < 1000 ? 400 : 1000, fit: 'max'}} projectId="5e3iqbhv" dataset="production" blocks={singlePost.body} serializers={serializers} />} */}
        </BodyUI>
      </SectionUI>

      <Footer />
    </div>
  );
}
