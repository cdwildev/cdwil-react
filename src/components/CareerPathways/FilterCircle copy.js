import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, to } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
import styled from "styled-components";

import "./styles.css";

export const FilterCircle = ({
  posX = -100,
  posY = -100,
  industry = "Advertising + Marketing",
  pool,
  setSelectedIndustries,
  selectedIndustries,
  industries,
  screen
}) => {
  let leftBounds = -window.innerWidth / 2;
  let rightBounds = window.innerWidth / 2;
  let topBounds = -window.innerHeight / 2;
  let bottomBounds = window.innerHeight / 2;

  useEffect(() => {
    window.addEventListener("resize", () => {
      leftBounds = -window.innerWidth / 2;
      rightBounds = window.innerWidth / 2;
      topBounds = -window.innerHeight / 2;
      bottomBounds = window.innerHeight / 2;
    });
  });

  const [mouseDown, setMouseDown] = useState(false);
  const [inside, setInside] = useState(false);
  const circle = useRef(null);

  useEffect(() => {
    let poolRight =
      pool.current.getBoundingClientRect().x +
      pool.current.getBoundingClientRect().width;
    let poolLeft = pool.current.getBoundingClientRect().x;
    let poolTop = pool.current.getBoundingClientRect().y;
    let poolBot =
      pool.current.getBoundingClientRect().y +
      pool.current.getBoundingClientRect().height;

    let circleX =
      circle.current.getBoundingClientRect().x +
      circle.current.getBoundingClientRect().width / 2;
    let circleY =
      circle.current.getBoundingClientRect().y +
      circle.current.getBoundingClientRect().height / 2;

    if (
      circleX > poolLeft &&
      circleX < poolRight &&
      circleY > poolTop &&
      circleY < poolBot
    ) {
   
      circle.current.style.background = "#1D4766"
      circle.current.style.color = "white"
    
      if (selectedIndustries.includes(industry)) {
        return;
      } else {
        setSelectedIndustries([...selectedIndustries, industry]);
      }
    } else {
      circle.current.style.background = "white";
      circle.current.style.color = "black";
    

      if (selectedIndustries.includes(industry)){
      setSelectedIndustries(
        selectedIndustries.filter((industries) => industries !== industry)
      );
      }
    }
  }, [mouseDown]);

  const [{ x, y }, api] = useSpring(() => ({ x: posX, y: posY }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox + posX, y: oy + posY, immediate: down }),
    {
      bounds: {
        left: leftBounds - posX,
        right: rightBounds - posX,
        top: topBounds - posY,
        bottom: bottomBounds - posY,
      },
      rubberband: true,
    }
  );
  return (
    <animated.div
      className="circle-filter"
      {...bind()}
      style={{ x, y, display: screen == 1 ? 'flex' : 'none' }}
      ref={circle}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {industry}
    </animated.div>
  );
};
