import { useState } from "react";

import styled from "styled-components";



const TileUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  min-height: 168px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  overflow: hidden;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 22px;
  cursor: pointer;

  &:hover {
    background: #252525;
    color: white;
  }

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 20px;
  }
`;

const InnerTextUI = styled.p`
padding: 22px 0 0 0;
font-size: 16px;
font-weight: 400;
line-height: 24px;
}
`;

export default function AboutTile({
  title,
  text =''
}) {
  const [active, setActive] = useState(false);

  return (
    <TileUI style={{height: active ? 'auto' : '168px', justifyContent: active ? 'flex-start' : 'flex-end'}} onClick={() => setActive(!active)}>
      {title}
  
      {text && <InnerTextUI style={{display: active ? 'flex' : 'none'}}>{text}</InnerTextUI>  }

    </TileUI>
  );
}
