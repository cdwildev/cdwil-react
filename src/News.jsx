import { Children, useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";

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
            mainImage,
            author,
            slug,
    
            
        }`
      )
      .then((data) => {
        setAllPosts(data);
      })
      .catch(console.error);

    
  }, []);

/*   console.log(allPostsData[0].body.map(post => post)) */

const styleText = (el) => {

  if (el == 'h2'){
    return {color: 'blue', fontSize: '36px', margin: '0 0 24px 0'}
  } 
  else if (el == 'h3'){
    return {color: 'green', fontSize: '24px', margin: '0 0 24px 0'}
  } 
  else if (el == 'normal'){
    return {color: 'black', margin: '0 0 24px 0'}
  }

}

  return (
  <div className="container" style={{display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start', textAlign: 'left'}}>
   
    {allPostsData.length == 0 ? '' : allPostsData[0].body.map(post => <div style={styleText(post.style)}>{post.children.map(text => text.text)}</div>)}

  </div>
  )
}
