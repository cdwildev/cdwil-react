import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, ReactPDF } from '@react-pdf/renderer';
import { MyDocument } from './SkillPdf'



import { ChevronUp, ChevronDown, X, ArrowDown , ArrowUp, Download} from 'react-feather';


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

  left: 5vw;
  transition: 0.5s ease;
  color: white;
  margin:  0 0 2.5vh 0 ;
  cursor: pointer;

`;

const SkillBarUI = styled.div`
  display: flex;

  justify-content: flex-start;;
  position: fixed;
  bottom: 0;
 
  width: 90vw;
  height: 10vh;
  background: linear-gradient(128.63deg, rgba(255, 255, 255, 0.7) -3.22%, rgba(255, 255, 255, 0.5) 123.53%);
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */
  
  border-radius: 25px;
  border-radius: 10px 10px 0 0;
  transition: 0.5s ease;
  z-index: 2000;
 
  align-items: flex-start;
  
  flex-flow: row wrap;

  @media (max-width: 800px) {
    width: 100vw;
  }



`;

const SkillTagUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 6vh;
  padding: 0 50px;
  margin: 2vh;
  background: rgba( 0, 86, 149, 0.8 );
 
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 50px;
  color: white;
  cursor: pointer;
position: relative;
  @media (max-width: 800px) {
    width: 80%;
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
  left: 10px;
  
  
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
  background: rgba( 0, 86, 149, 0.8 );
 
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );



`;

const ExpandTextUI = styled.div`

    margin:  0 10px;


`;

const ScrollMessageUI = styled.div`
position: absolute;

right: 5vw;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
width: 250px;
animation: up 2s ease infinite;
position: fixed;
transition: 0.5s ease;



`

const ToTopUI = styled.a`
position: fixed;

right: 5vw;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
width: 150px;
cursor: pointer;
transition: 0.5s ease;



`
const DownloadButtonUI = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 5%;
min-width: 6vh;
height: 6vh;


background: rgba( 0, 86, 149, 0.8 );
position: absolute;
top: 2vh;
right: 2vh;

backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-radius: 50px;
color: white;
cursor: pointer;

@media (max-width: 800px) {
  display: none;
}


`


export const SkillBar = ({ renderPdf, showPost, setShowPost,skillList, setSkillList, skillType, scrollTop, skill, executeScroll, softSkillList, hardSkillList, softwareList, }) => {


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
setSkillArray(skillList.reverse())
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

       {/*  <ScrollIndicatorUI style={{display: skillType ? 'flex' : 'none', }}>{scrollTop > 200 ? 'back to top' : 'scroll down to see skills'}</ScrollIndicatorUI> */}
 
      
      {renderPdf ? <PDFDownloadLink document={<MyDocument skillList={skillList} softSkillList={softSkillList} softwareList={softwareList} hardSkillList={hardSkillList}/>} fileName="somename.pdf"><DownloadButtonUI><Download/></DownloadButtonUI></PDFDownloadLink> : ''}
      </SkillBarUI>

      { skill.length > 0 && scrollTop < 1300 ? '' : skill.length > 0 && scrollTop > 1300 ? <ToTopUI onClick={executeScroll} style={{ bottom: expandMenu ? '52.5vh' : '12.5vh'}}> Back to Top <ArrowUp/> </ToTopUI> : ''}

      </ContainerUI>
  );
};


export default SkillBar