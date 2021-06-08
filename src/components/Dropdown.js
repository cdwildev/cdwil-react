import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";

const ContainerUI = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  font-size: 30px;
  line-height: 20px;
  cursor: pointer;

  &:hover{
    background: #00B188;
  }
`;

export const Dropdown = ({}) => {
  return (
    <ContainerUI>
      <DropdownUI>
        Portfolio and Professional Practise
        <Plus></Plus>
      </DropdownUI>
      <DropdownUI>
        CVs/Resumes, Cover Letters and Artist Statements <Plus></Plus>
      </DropdownUI>
      <DropdownUI>
        Applications, Proposals and Grant Writing <Plus></Plus>
      </DropdownUI>
      <DropdownUI>
        Entrepreneurship, Small Businesses and Collectives <Plus></Plus>
      </DropdownUI>
    </ContainerUI>
  );
};

export default Dropdown;
