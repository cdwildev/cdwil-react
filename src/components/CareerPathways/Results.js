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

import { MyDocument } from "./CareerPdf";

import {
  ChevronUp,
  ChevronDown,
  X,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  Download,
} from "react-feather";
import { FilterCircle } from "./FilterCircle";
import { FilterSquare } from "./FilterSquare";
import { FilterSemiCircle } from "./FilterSemiCircle";

const ContainerUI = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;

  transition: 1s ease;
  z-index: 1000;
`;

const IndustriesGridUI = styled.div`
  width: 80vw;
  min-height: 10vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
`;

const IndustryUI = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 50px;

  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: 6px;
`;

const SkillGridUI = styled.div`
  width: 80vw;
  min-height: 10vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

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
`;

const TitleUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  color: white;
  margin: 0 0 48px 0;
`;

const CareerGridUI = styled.div`
  width: 80vw;
  min-height: 10vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
`;

const CareerUI = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  border-radius: 50px;

  background: #ffffff;
  box-sizing: border-box;
  border-radius: 50px;

  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;

  color: #1d4766;

  margin: 6px;
`;

const BackButtonUI = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  border-radius: 50%;

  border: 3px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  position: relative;

  top: 5vh;
  color: white;
  cursor: pointer;
`;

const DownloadButtonUI = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  border-radius: 50%;

  border: 3px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50px;

  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;

  right: 5vw;
  bottom: 5vh;
  color: white;
  cursor: pointer;
`;

const BackButtonTextUI = styled.div`
  width: 200px;
  position: absolute;
  left: 100px;
  z-index: 1000;
`;

const DownloadButtonTextUI = styled.div`
  width: 200px;
  position: absolute;
  right: 100px;
  z-index: 1000;
`;

export const Results = ({
  selectedIndustries,
  selectedSkills,
  selectedValues,
  allPostsData,
  loading,
  setScreen,
}) => {
  const industries = selectedIndustries
    .map((industry) => industry.value)
    .map((array) => array);

  const skills = selectedSkills
    .map((industry) => industry.value)
    .map((array) => array);

  const values = selectedValues
    .map((industry) => industry.value)
    .map((array) => array);
  console.log(allPostsData);

  console.log(industries);

  console.log(skills);

  console.log(values);

  const filteredIndustries = allPostsData
    .filter(
      (industry) =>
        industry.industry &&
        industry.industry.some(
          (r) => (r && industries.includes(r)) || r.includes("all")
        )
    )
    .filter(
      (industry) =>
        industry.skills &&
        industry.skills.some(
          (r) => (r && skills.includes(r)) || r.includes("all")
        )
    ); /* .filter(
    (industry) => industry.values && industry.values.some((r) => r && values.includes(r) || r.includes('all')) 
  ) */

  console.log(filteredIndustries + " filtered industry");

  return (
    <>
      <ContainerUI
        style={{ transform: loading ? "translateX(100vw)" : "translateX(0vw)" }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            padding: "0 0 0 5vw",
            margin: "0 0 50px 0",
          }}
        >
          <BackButtonUI onClick={() => setScreen(1)}>
            <ArrowLeft />
            <BackButtonTextUI>Explore More Careers</BackButtonTextUI>
          </BackButtonUI>
        </div>
        <TitleUI>Your Careers Pathways</TitleUI>
        <CareerGridUI>
          {filteredIndustries.map((industry) => (
            <CareerUI>{industry.title}</CareerUI>
          ))}
        </CareerGridUI>
        <IndustriesGridUI>
          {selectedIndustries.map((industry) => (
            <IndustryUI>{industry.title}</IndustryUI>
          ))}
        </IndustriesGridUI>

        <SkillGridUI>
          {selectedSkills.map((industry) => (
            <SkillUI>{industry.title}</SkillUI>
          ))}
        </SkillGridUI>
        <SkillGridUI>
          {selectedValues.map((industry) => (
            <SkillUI>{industry.title}</SkillUI>
          ))}
        </SkillGridUI>

        {!loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 5vw 5vh 0",
            }}
          >
            <PDFDownloadLink
              fileName="Career Pathfinder.pdf"
              document={
                <MyDocument
                  selectedIndustries={selectedIndustries}
                  selectedSkills={selectedSkills}
                  selectedValues={selectedValues}
                  filteredIndustries={filteredIndustries}
                />
              }
            >
              <DownloadButtonUI>
                <DownloadButtonTextUI>Download a PDF</DownloadButtonTextUI>
                <Download />
              </DownloadButtonUI>
            </PDFDownloadLink>
          </div>
        ) : (
          ""
        )}
      </ContainerUI>
    </>
  );
};

export default Results;
