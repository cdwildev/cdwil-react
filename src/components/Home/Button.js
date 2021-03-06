import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const ButtonUI = styled.div`
  width: 160px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid black;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;

`;


export const Button = ({text='Learn More'}) => {

  return (

    <>
    <Link to="/about">
    <ButtonUI>{text}</ButtonUI>
    </Link>
    </>
  );
};

export default Button
