import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";

export default function About() {
  const [allPostsData, setAllPosts] = useState([]);

  const SectionUI = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 75vw;


  @media (max-width: 1400px) {
    width: 90vw;

  }
  
 
`;

  return (
  <div className="container">


<SectionUI>


    
</SectionUI>



  </div>
  )
}
