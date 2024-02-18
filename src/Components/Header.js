import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    
    <ContainerHeader>
      <HeaderInfo>
      <h1>GAME</h1>
      <p>Grant African Methodist Episcopal Church</p>
      </HeaderInfo>
    </ContainerHeader>
    

  )
}

export default Header;

const ContainerHeader = styled.div`
    
    display: flex;
    justify-content: center;
    font-size: larger;
    font-weight: bold;
    margin: none;
    background-color: maroon;
    color: whitesmoke;                          

`;

const HeaderInfo = styled.div``;
