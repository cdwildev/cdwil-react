import { useEffect, useState, useRef } from "react";
import React from "react";
import styled from "styled-components";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF,
} from "@react-pdf/renderer";

import { ChevronUp, ChevronDown, X, ArrowDown, ArrowUp } from "react-feather";
import { FilterCircle } from "./FilterCircle";
import { FilterSquare } from "./FilterSquare";
import { FilterSemiCircle } from "./FilterSemiCircle";
import { Results } from "./Results";

const ContainerUI = styled.div`
  width: 100vw;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;

`;

const SelectionContainerUI = styled.div`
  width: 65vw;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  min-height: 20vw;
  position: absolute;
  left: 10vw;
  top: 10vh;
  z-index: 50;

`;

const PoolUI = styled.div`
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 35vw;
  position: absolute;
  right: 5vw;
  top: 5vh;
  z-index: 0;
  border-radius: 100%;
  border: 3px solid white;

  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;

  color: white;
`;

const ButtonUI = styled.div`
width: 153px;
height: 57px;
background: #00B188;

border: 5px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10px;

font-family: Noto Sans;
font-size: 20px;
font-style: normal;
font-weight: 800;

text-align: center;
color: white;
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
z-index: 1000;
`;

const ProgressUI = styled.div`
width: 153px;
height: 57px;
background: #00B188;
width: 744px;
height: 160px;

box-sizing: border-box;

background: #0D3858;

border-radius: 40px 40px 0 0;

font-family: Noto Sans;
font-size: 20px;
font-style: normal;
font-weight: 800;
position: absolute;
bottom: 0;
text-align: center;
color: white;
display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
z-index: 1000;
`;

const CircleUI = styled.div`

width: 27px;
height: 27px;

border-radius: 50px;
border: 3px solid white;
background: #0D3858;
position: relative;
left: 10px;

`;


const SquareUI = styled.div`

width: 48px;
height: 27px;

border: 3px solid white;
border-radius: 3px;

background: #0D3858;
`;

const SemiUI = styled.div`


width: 48px;
height: 27px;
border: 3px solid white;
position: relative;
right: 10px;
border-radius: 48px 48px 0 0 ;
background: #0D3858;

`;

const LineUI = styled.div`


border-bottom: 3px solid white;
width: 128px;


`;


const ProgressLabelUI = styled.div`


transform: translateY(48px);
font-family: Noto Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
display: flex;

justify-content: center;

`;



const industries = [
  { title: 'Advertising + Marketing', value: 'advertising' },
  { title: 'Amusement + Recreation ', value: 'amusement' },
  { title: 'Animation + VFX', value: 'animation' },
  { title: 'Architecture', value: 'architecture' },
  { title: 'Arts + Culture', value: 'arts' },
  { title: 'Craft + Antiques', value: 'craft' },
  { title: 'Education + Research', value: 'education' },
  { title: 'Fashion + Textiles', value: 'fashion' },
  { title: 'Film / Photo / TV / Video / Radio', value: 'film' },
  { title: 'Food', value: 'food' },
  { title: 'Gaming + Interactive Media', value: 'gaming' },
  { title: 'Government + Civic + Social Services', value: 'government' },
  { title: 'Healthcare', value: 'healthcare' },
  { title: 'Manufacturing + Engineering', value: 'manufacturing' },
  { title: 'Museums + Galleries', value: 'museums' },
  { title: 'Performing Arts', value: 'performing-arts' },
  { title: 'Music', value: 'music' },
  { title: 'Publishing + Print', value: 'publishing' },
  { title: 'Technology', value: 'technology' },
  { title: 'All', value: 'all' },
]

const skills = [
  { title: 'Animate', value: 'animate' },
  { title: 'Build', value: 'build' },
  { title: 'Carve', value: 'carve' },
  { title: 'Capture', value: 'capture' },
  { title: 'Curate', value: 'curate' },
  { title: 'Critique', value: 'critique' },
  { title: 'Code', value: 'code' },
  { title: 'Composite', value: 'composite' },
  { title: 'Compose', value: 'compose' },
  { title: 'Conceptualize', value: 'conceptualize' },
  { title: 'Colour', value: 'colour' },
  { title: 'Cut', value: 'cut' },
  { title: 'Doodle', value: 'coodle' },
  { title: 'Draw or Sketch', value: 'draw' },
  { title: 'Design', value: 'design' },
  { title: 'Direct', value: 'direct' },
  { title: 'Document or Record (sound or images)', value: 'document' },
  { title: 'Edit (images and/or audio)', value: 'edit' },
  { title: 'Etch or Engrave', value: 'etch' },
  { title: 'Exhibit', value: 'exhibit' },
  { title: 'Experiment', value: 'experiment' },
  { title: 'Engage Communities', value: 'engage' },
  { title: 'Entertain', value: 'entertain' },
  { title: 'Fabricate', value: 'fabricate' },
  { title: 'Facilitate and/or Teach', value: 'facilitate' },
  { title: 'Film or Cinematize', value: 'film' },
  { title: 'Hack and/or Repair', value: 'hack' },
  { title: 'Imagine', value: 'imagine' },
  { title: 'Illustrate', value: 'illustrate' },
  { title: 'Ink', value: 'ink' },
  { title: 'Inform', value: 'inform' },
  { title: 'Light', value: 'light' },
  { title: 'Mold and Cast', value: 'mold' },
  { title: 'Narrative / World Build', value: 'narrative' },
  { title: 'Paint', value: 'paint' },
  { title: 'Perform', value: 'perform' },
  { title: 'Photograph', value: 'photograph' },
  { title: 'Pitch or Present', value: 'pitch' },
  { title: 'Print', value: 'print' },
  { title: 'Predict', value: 'predict' },
  { title: 'Prototype', value: 'prototype' },
  { title: 'Produce', value: 'produce' },
  { title: 'Publish', value: 'publish' },
  { title: 'Research', value: 'research' },
  { title: 'Sew', value: 'sew' },
  { title: 'Solve', value: 'solve' },
  { title: 'Strategize', value: 'strategize' },
  { title: 'Test', value: 'test' },
  { title: 'Tinker (with electronics)', value: 'tinker' },
  { title: 'Theorize', value: 'theorize' },
  { title: 'Visualize', value: 'visualize' },
  { title: 'Vectorize', value: 'vectorize' },
  { title: 'Weld', value: 'weld' },
  { title: 'Wheelthrow or Handbuild', value: 'wheelthrow' },
  { title: 'Woodwork', value: 'woodwork' },
  { title: 'Write', value: 'write' },
  { title: 'Question', value: 'question' },
  { title: '3D Model/Print', value: '3d' },
  { title: 'All', value: 'all' }

]

const values = [
  { title: 'Flexibility', value: 'flexibility' },
  { title: 'Learning', value: 'learning' },
  { title: 'Beauty', value: 'beauty' },
  { title: 'Humor', value: 'humor' },
  { title: 'Justice', value: 'justice' },
  { title: 'Community', value: 'community' },
  { title: 'Social Responsibility', value: 'social-responsibility' },
  { title: 'Generosity', value: 'generosity' },
  { title: 'Innovation', value: 'innovation' },
  { title: 'Leadership', value: 'leadership' },
  { title: 'Financial Security', value: 'financial-security' },
  { title: 'High-Pay', value: 'high-pay' },
  { title: 'Teamwork', value: 'teamwork' },
  { title: 'Fast-Paced', value: 'fast-paced' },
  { title: 'Freedom', value: 'freedom' },
  { title: 'Unpredictable', value: 'unpredictable' },
  { title: 'Structure/Routine', value: 'structure' },
  { title: 'Helping Others', value: 'helping-others' },
  { title: 'Results Oriented', value: 'results-oriented' },
  { title: 'Process Driven', value: 'process-driven' },
  { title: 'Being Reflective', value: 'being-reflective' },
  { title: 'Being Involved in Decision-Making', value: 'decision-making' },
  { title: 'Each Day is Different', value: 'day-different' },
  { title: 'Each Day is Structured the Same', value: 'day-structured' },
  { title: 'Working Indoors', value: 'working-indoors' },
  { title: 'Working Outdoors', value: 'working-outdoors' },
  { title: 'Working with People', value: 'working-with-people' },
  { title: 'Working with Nature/Animals', value: 'working-with-nature' },
  { title: 'Working with Data (ex, ideas, words, numbers)', value: 'working-with-data' },
  { title: 'Working with Things (ex. materials, equipment, etc.)', value: 'working-with-things'},
  { title: 'All', value: 'all' },

]

export const CareerPathways = ({ allPostsData }) => {

  console.log(allPostsData)
  const pool = useRef(null);

  const [screen, setScreen] = useState(1)

  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  
  const nextScreen = () => {
    if (screen == 1){
      setScreen(2)
    } else if(screen == 2){
      setScreen(3)
    } else if(screen == 3){
      setScreen(4)
    }
  }

  const prevScreen = () => {
    if (screen == 3){
      setScreen(2)
    } else if(screen == 2){
      setScreen(1)
    } else if(screen == 4){
      setScreen(3)
    }
  }

  useEffect(() => {
   console.log(selectedIndustries)
  }, [selectedIndustries])

  const rndInt = Math.floor(Math.random() * 500) + 1;

  return (
    <>
      <ContainerUI>
        <SelectionContainerUI>
                {industries.map(el => <FilterCircle screen={screen} pool={pool} setSelectedIndustries={setSelectedIndustries} selectedIndustries={selectedIndustries} industries={el} industry={el.title} floatY={Math.floor(Math.random() * 5) + 0} positionX={Math.floor(Math.random() * 500) + 0} positionY={Math.floor(Math.random() * 500) + 0}/>) } 
                {skills.map(el => <FilterSquare screen={screen} pool={pool} setSelectedIndustries={setSelectedSkills} selectedIndustries={selectedSkills} industries={el} industry={el.title} positionX={Math.floor(Math.random() * 500) + 0} positionY={Math.floor(Math.random() * 500) + 0}/>)  } 
                {values.map(el => <FilterSemiCircle screen={screen} pool={pool} setSelectedIndustries={setSelectedValues} selectedIndustries={selectedValues} industries={el} industry={el.title} positionX={Math.floor(Math.random() * 500) + 0} positionY={Math.floor(Math.random() * 500) + 0}/>)  } 
        </SelectionContainerUI>
        <ButtonUI onClick={prevScreen} style={{position: 'absolute', bottom: '5vh', left: '5vw'}}>Back</ButtonUI>
 
        { screen == 4 ? (

        <Results selectedIndustries={selectedIndustries} selectedSkills={selectedSkills} selectedValues={selectedValues} allPostsData={allPostsData}> </Results>

        
        ) : ( <>
        <PoolUI ref={pool}>Drop {screen == 1 ? 'industries' : screen == 2 ? 'interests' : screen == 3 ? 'values' : ''} here</PoolUI>
        <ButtonUI onClick={nextScreen} style={{position: 'absolute', bottom: '5vh', right: '5vw'}}>{screen == 3 ? 'Done' : 'Next'}</ButtonUI>
        <ProgressUI>

          <CircleUI style={{border: screen >= 1 ? '3px solid #00B188' : '3px solid white' }}><ProgressLabelUI style={{color: screen == 1 ? '#00B188' : 'white' }}>Industry</ProgressLabelUI></CircleUI>
          <LineUI style={{borderBottom: screen >= 2 ? '3px solid #00B188' : '3px solid white' }}/>
          <SquareUI style={{border: screen >= 2 ? '3px solid #00B188' : '3px solid white' }}><ProgressLabelUI style={{color: screen == 2 ? '#00B188' : 'white' }}>Interests</ProgressLabelUI></SquareUI>
          <LineUI style={{borderBottom: screen >= 3 ? '3px solid #00B188' : '3px solid white' }}/>
          <SemiUI style={{border: screen >= 3 ? '3px solid #00B188' : '3px solid white' }}><ProgressLabelUI style={{color: screen == 3 ? '#00B188' : 'white' }}>Values</ProgressLabelUI></SemiUI>

        </ProgressUI>
        </> )
        } 

      </ContainerUI>
    </>
  );
};

export default CareerPathways;
