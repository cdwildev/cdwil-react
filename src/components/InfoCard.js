import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CardUI = styled.div`
height: 281px;
width: 640px;
border-radius: 25px;
position: absolute;
background: linear-gradient(128.63deg, rgba(255, 255, 255, 0.9) -3.22%, rgba(255, 255, 255, 0.9) 123.53%);
backdrop-filter: blur(25px);
display: flex; 
align-items: center;
justify-content: center;
z-index: 1000;
`;

const ContainerUI = styled.div`
  height: 174px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const HeaderUI = styled.div`
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;

`;

const TextUI = styled.div`
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  width:418px;

`;


const ButtonUI = styled.div`
  border-radius: 100%;
  width:20px;
  height:20px;
  position: absolute;
  border: 1px solid black;
  right: -80px;
  top: -30px;

`;


export const InfoCard = ({}) => {

  const [showCard, setShowCard] = useState(true)

  return (
    <CardUI style={{ display: showCard ? 'flex' : 'none'}}>
      <ContainerUI>
        <ButtonUI onClick={() => setShowCard(false)}>x</ButtonUI>
      <HeaderUI>IMPORTANT</HeaderUI>
      <TextUI>Once you exit this page, your skills will not be saved. </TextUI>
      <div>..</div>
      </ContainerUI>
    </CardUI>
  );
};

export default InfoCard;
