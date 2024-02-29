import React from 'react';
import { RiCrossLine } from "react-icons/ri";
import styled from 'styled-components';

function Header() {
  return (
    
    <ContainerHeader>
      <HeaderInfo>
      <RiCrossLine />
      <h1>GAME</h1>
      <Section>
      <p>Grant African Methodist Episcopal Church</p>
      </Section>
      
      </HeaderInfo>
    </ContainerHeader>
    

  )
}

export default Header;

const ContainerHeader = styled.div`
    
    
    font-size: larger;
    font-weight: bold;
    margin: none;
    background-color: maroon;
    color: whitesmoke;                          

`;

const HeaderInfo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
  svg {
    height: 60px;
    width: 60px;
  }
`;

const Section = styled.div`
  
`;