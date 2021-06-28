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


const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;


`;

const IndustriesGridUI = styled.div`

width: 80vw;
min-height: 10vh;
display: flex;

justify-content: center;
align-items: center;

`

const IndustryUI = styled.div`



display: flex;

justify-content: center;
align-items: center;
padding: 10px 20px;
border-radius: 50px;

border: 3px solid #FFFFFF;
box-sizing: border-box;
border-radius: 50px;

font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
color: white;
margin: 6px;

`

const SkillGridUI = styled.div`

width: 80vw;
min-height: 10vh;
display: flex;

justify-content: center;
align-items: center;

`

const SkillUI = styled.div`



display: flex;

justify-content: center;
align-items: center;
padding: 10px 20px;

background: rgba(255, 255, 255, 0.2);
border-radius: 10px;

font-family: Noto Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
color: white;
margin: 6px;

`

const TitleUI = styled.div`
font-family: Noto Sans;
font-style: normal;
font-weight: 800;
font-size: 48px;
color: white;
`

const CareerGridUI = styled.div`
width: 80vw;
min-height: 10vh;
display: flex;

justify-content: center;
align-items: center;

`

const CareerUI = styled.div`
display: flex;

justify-content: center;
align-items: center;
padding: 20px 40px;
border-radius: 50px;

background: #FFFFFF;
box-sizing: border-box;
border-radius: 50px;

font-family: Noto Sans;
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: 14px;
letter-spacing: 0em;
text-align: center;

color: #1D4766;

margin: 6px;
`

export const Results = ({ selectedIndustries, selectedSkills, selectedValues, allPostsData }) => {
    const industries = selectedIndustries.map(industry => industry.value).map(array => array)

    const skills = selectedSkills.map(industry => industry.value).map(array => array)
    
    const values = selectedValues.map(industry => industry.value).map(array => array)

    console.log( industries)

    console.log( skills)

    console.log( values)

    const filteredIndustries = allPostsData.filter(industry => industry.industry.some(r => industries.includes(r)) || industry.skills.some(r => skills.includes(r)) || industry.values.some(r => values.includes(r)))


    console.log(filteredIndustries)
 
    /* console.log(industries.some(r=> arr2.includes(r))) */

/*     console.log(arr1.some(r=> arr2.includes(r))) */
    

  useEffect(() => {

  }, [])

  return (
    <>
      <ContainerUI>
          <TitleUI>Your Careers Pathways</TitleUI>
        <IndustriesGridUI>{selectedIndustries.map(industry => <IndustryUI>{industry.title}</IndustryUI>)}</IndustriesGridUI>
        <CareerGridUI>
            {filteredIndustries.map(industry => <CareerUI>{industry.title}</CareerUI>)}
        </CareerGridUI>
        <SkillGridUI>{selectedSkills.map(industry => <SkillUI>{industry.title}</SkillUI>)}</SkillGridUI>
        <SkillGridUI>{selectedValues.map(industry => <SkillUI>{industry.title}</SkillUI>)}</SkillGridUI>
      </ContainerUI>
    </>
  );
};

export default Results;