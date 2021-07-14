import { useEffect, useState } from "react";

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

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  width: 75vw;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContactInfoUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  margin: 0 0 40px 0;
  text-align: left;
`;

const LineBreakUI = styled.div`
  border-bottom: 2px solid #252525;
  width: 90px;
  margin: 0 0 40px 0;
  text-align: left;
`;

const GradientUI = styled.div`
  position: absolute;
  width: 785.08px;
  height: 216.22px;
  left: -200px;
  z-index: -100;

  background: linear-gradient(90deg, #9a57b4 33.37%, #fe2b9e 68.26%);
  filter: blur(100px);
  transform: rotate(11.2deg);
`;

const HighlightUI = styled.div`
  position: absolute;
  width: 78%;
  height: 8px;
  bottom: 0px;
  z-index: -100;
  background: #ede04a;
  opacity: 0.7;
  filter: blur(5px);
  transform: rotate(-0.21deg);
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

/*   const [text, setText] = useState(null)


  useEffect(() => {

    if (title == 'Career Advising'){
      setText(<div>Big ideas don't just happen. They are process driven, tested, made and re-made and it will be the same with your professional career. <br/><br/> Emily Carr University is committed to help you transform and contextualize your creative practice so that upon graduation you are able to deliver value to community, culture, and the economy, while - perhaps most importantly - making a meaningful life for yourself.</div>)
     } else if (){

     }

  }, []) */

  return (
    <TileUI style={{height: active ? 'auto' : '168px', justifyContent: active ? 'flex-start' : 'flex-end'}} onClick={() => setActive(!active)}>
      {title}
  
      {text && <InnerTextUI style={{display: active ? 'flex' : 'none'}}>{text}</InnerTextUI>  }

    </TileUI>
  );
}
