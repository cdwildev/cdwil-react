import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const ContainerUI = styled.div`
width: 75vw;
position absolute; 
top: 10vh;
display: flex;
justify-content: space-between;


@media (max-width: 500px) {
    width: 90vw;
    justify-content: flex-start;
  }
`;

const SearchContainerUI = styled.div`
position: absolute;
display: flex;
flex-direction: column;
cursor: pointer;
right: 0;
position: absolute;

width: 200px; 
`;



const HelpUI = styled.div`
position: absolute;
display: flex;
height: 50px;
width: 50px;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
cursor: pointer;
border-radius: 50px;
border: 1px solid rgb(255, 255, 255);
background: transparent;
background: rgba( 0, 86, 149, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );

border: 1px solid rgba( 255, 255, 255, 0.18 );


`;

const SearchUI = styled.input`


  height: 50px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid rgb(255, 255, 255);
  background: transparent;
  background: rgba( 0, 86, 149, 0.5 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10.0px );
    -webkit-backdrop-filter: blur( 10.0px );

    

border: 1px solid rgba( 255, 255, 255, 0.18 );

color: white;
  cursor: pointer;
  
  &:focus{
      outline: none;
  }
  

`;


const AddSkillUI = styled.div`
height: 50px;
background: red;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0 0 25px 25px;
color: white;

border: 1px solid rgb(255, 255, 255);
background: transparent;
background: rgba( 0, 86, 149, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );

  &:hover{
    background: white;
    color: #005695
}

border: 1px solid rgba( 255, 255, 255, 0.18 );
`;


const SearchCompleteUI = styled.div`
color: white;
height: 50px;

background: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
cursor: pointer;
overflow: hidden;

&:hover{
    background: white;
    color: #005695
}

border: 1px solid rgb(255, 255, 255);
background: transparent;
background: rgba( 0, 86, 149, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );

border: 1px solid rgba( 255, 255, 255, 0.18 );

`;

export const SkillSearch = ({ allPostsData, setSkillList, skillList }) => {
  const [showPost, setShowPost] = useState(false);
  const [showRelated, setShowRelated] = useState(false);
    const [inputText, setInputText] = useState('')

   const handleInput = (e) => {
       setInputText(e.target.value)
       setShowPost(true)
   }


   const showSkills = () => {
     
     if (allPostsData.length > 0){
     allPostsData
       .filter(function (allSkills) {
         return allSkills.title.toLowerCase().includes(inputText.toLowerCase());
       })
       .map((data) => {
         return (
           <SearchCompleteUI onClick={(e) => setSkillList([...skillList, e.target.innerHTML])}>{data.title}</SearchCompleteUI>
         );
       });
   }
   }

  return (
    <ContainerUI>

        {/* <HelpUI>?</HelpUI> */}

        <SearchContainerUI>
            <SearchUI style={{borderRadius: inputText.length > 1 ? '25px 25px 0 0' : '50px' }} onChange={handleInput} placeholder="Search Skills" value={inputText}/>
            {showPost && inputText.length > 1 ? showSkills : ''}
            {showPost && inputText.length > 1 ? <AddSkillUI onClick={(e) => setSkillList([...skillList, inputText])}>Add New Skill</AddSkillUI> : ''}
        </SearchContainerUI>
    </ContainerUI>
  );
};


export default SkillSearch