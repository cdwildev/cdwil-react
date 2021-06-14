import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus, Minus } from "react-feather";


const DropdownUI = styled.div`
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 25px;
  width: 100%;
  min-height: 120px;
  margin: 0 0 16px 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
    flex-direction: column;

  cursor: pointer;
  text-align: left;

  &:hover{
    background: #00B188;
    
  }

`;


const ButtonUI = styled.div`
width: 100%;
height: 120px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const ContentUI = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`;

const LinkUI = styled.div`
width: 100%;
height: 120px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const DropdownButton = ({text}) => {

  const [active, setActive] = useState(false)

  return (
<>
      <DropdownUI onClick={() => setActive(!active)}>
        <ButtonUI>{text} {active ? <Minus></Minus> : <Plus></Plus> }  </ButtonUI>

        {active ? <ContentUI>
            <LinkUI>links</LinkUI>
        </ContentUI> : ''}

      </DropdownUI>

    
        

</> 

  );
};

export default DropdownButton;
