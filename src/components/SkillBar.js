import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { ChevronUp, ChevronDown, X } from 'react-feather';


const ContainerUI = styled.div`
  width: 100vw;
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 2000;
`;

const ExpandUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  bottom: 10vh;
  left: 5vw;
  transition: 0.5s ease;
  color: white;
  margin:  0 0 10px 0 ;
`;

const SkillBarUI = styled.div`
  display: flex;

  justify-content: center;
  position: fixed;
  bottom: 0;
  flex-wrap: wrap;
  width: 90vw;
  height: 10vh;
  background: rgba( 0, 86, 149, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 10px 10px 0 0;
  transition: 0.5s ease;
  z-index: 2000;
 
  align-items: flex-start;
  
  



`;

const SkillTagUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 6.5vh;
  padding: 0 50px;
  margin: 1.5%;
  background: rgba( 0, 86, 149, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 50px;
  color: white;
  cursor: pointer;
position: relative;
  @media (max-width: 800px) {
    width: 100%;
  }


`;


const ScrollIndicatorUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 10vh;
  right: 10vw;
  color: white;



`;

const SkillDeleteUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  color: white;
  width:25px;
  height:25px;
  border: 1px solid white;
  border-radius: 100%;
  position: absolute;
  left:10px;
  
  
  pointer-events:none;
  



`;

const SkillCountUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  color: white;
  width:25px;
  height:25px;
  border: 1px solid white;
  border-radius: 100%;



`;

const ExpandTextUI = styled.div`

    margin:  0 10px;


`;


export const SkillBar = ({ showPost, setShowPost,skillList, setSkillList, skillType, scrollTop }) => {


    const [skillArray, setSkillArray] = useState([])
    const [expandMenu, setExpandMenu] = useState(false)
    const handleClick = (e) => {
        console.log(e.target.innerHTML.split('<')[0])
        setSkillList(skillArray.filter(skill => skill !== e.target.innerHTML.split('<')[0]))
        if(expandMenu &&skillArray.length == 1){
            setExpandMenu(false)
        } 
    }

      useEffect(() => {
setSkillArray(skillList)
  }, [skillList]);



  return (

      <ContainerUI>

      <ExpandUI style={{ display:skillArray.length > 0 ? 'flex' : 'none', bottom: expandMenu ? '50vh' : '10vh'}} onClick={() => setExpandMenu(!expandMenu)}>
          {expandMenu ? <ChevronDown /> : <ChevronUp/>  }
          <ExpandTextUI>{expandMenu &&skillArray.length > 0 ? 'see less skills':skillArray.length == 0 ? '' : 'see all skills'}</ExpandTextUI>
          <SkillCountUI>{expandMenu &&skillArray.length > 0 ?skillArray.length :skillArray.length == 0 ? '' :skillArray.length }</SkillCountUI>
              
      </ExpandUI>
      <SkillBarUI style={{overflowY: expandMenu ? 'scroll' : 'hidden', display: skillArray.length > 0 ? 'flex' : 'none', height: expandMenu ? '50vh' : '10vh'}}>
        
        {skillArray.length > 0 ?skillArray.map(skill => <SkillTagUI key={skill} onClick={handleClick}>{skill}<SkillDeleteUI><X/></SkillDeleteUI></SkillTagUI>) : ''}

        <ScrollIndicatorUI style={{display: skillType ? 'flex' : 'none'}}>{scrollTop > 200 ? 'back to top' : 'scroll down to see skills'}</ScrollIndicatorUI>

      </SkillBarUI>
      </ContainerUI>
  );
};


export default SkillBar