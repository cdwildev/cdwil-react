import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ArrowRight, X } from "react-feather";

const CardUI = styled.div`
height: 281px;
max-width: 600px;
width: 70vw;
border-radius: 25px;
position: absolute;
top:30vh;
background: #FFFFFF;
backdrop-filter: blur(25px);

border-radius: 25px;
display: flex; 
align-items: center;
justify-content: center;
z-index: 1000;
color: rgba(22, 64, 95, 1);

`;

const ContainerUI = styled.div`
  height: 100%;
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
  margin: 25px 0 0 0;

`;

const TextUI = styled.div`
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  width:80%;

`;


const ButtonUI = styled.div`
  border-radius: 100%;
  width:20px;
  height:20px;
  position: absolute;
  border: 1px solid rgba(22, 64, 95, 1);
  right: 10px;
  top: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

const PageUI = styled.div`
margin: 0 0 25px 0;
display: flex;
`;

const CircleUI = styled.div`
width: 8px;
height: 8px;
border-radius: 100%;
border: 1px solid rgba(22, 64, 95, 1);
margin 0 4px;
cursor: pointer;
`


export const InfoCard = ({}) => {

  const [showCard, setShowCard] = useState(true)
  const [page, setPage] = useState('one')

  return (
    <CardUI style={{ display: showCard ? 'flex' : 'none'}}>
      <ContainerUI>
        <ButtonUI style={{ display: page == 'two' ? 'flex' : 'none'}} onClick={() => setShowCard(false)}><X/></ButtonUI>
        <ButtonUI style={{ display: page == 'one' ? 'flex' : 'none'}} onClick={() => setPage('two')}><ArrowRight/></ButtonUI>
      <HeaderUI>IMPORTANT</HeaderUI>
      <TextUI>{ page == 'one' ? 'Once you exit this page, your skills will not be saved.' : 'Export your map as a PDF and print it out or save it to your computer so you can always have access to it.' }</TextUI>
      <PageUI>
        <CircleUI onClick={() => setPage('one')} style={{background: page == 'one' ? 'rgba(22, 64, 95, 1)' : 'transparent'}}></CircleUI>
        <CircleUI onClick={() => setPage('two')} style={{background: page == 'one' ? 'transparent' : 'rgba(22, 64, 95, 1)'}}></CircleUI>
      </PageUI>
      </ContainerUI>
    </CardUI>
  );
};

export default InfoCard;
