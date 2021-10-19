import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";
import { DropdownButton } from './DropdownButton'

const ContainerUI = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const DropdownUI = styled.div`
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 25px;
  width: 100%;
  height: 120px;
  margin: 0 0 16px 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
 

  cursor: pointer;
  text-align: left;



`;

export const Dropdown = ({allPostsData}) => {

  const [active, setActive] = useState(false)

  return (
    <ContainerUI>
      <DropdownButton data = {allPostsData.filter(resource => resource.category && resource.category.includes('portfolio'))} text = "Professional Practice"/>
      <DropdownButton data = {allPostsData.filter(resource => resource.category && resource.category.includes('resume'))} text = "CVs/Resumes, Cover Letters and Getting The Job"/>
      <DropdownButton data = {allPostsData.filter(resource => resource.category && resource.category.includes('applications'))} text = "Applications, Proposals and Grant Writing"/>
      <DropdownButton data = {allPostsData.filter(resource => resource.category && resource.category.includes('entrepreneurship'))} text = "Entrepreneurship, Small Businesses and Collectives"/>
      
    </ContainerUI>
  );
};

export default Dropdown;
