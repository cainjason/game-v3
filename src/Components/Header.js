import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    
    <ContainerHeader>
      <h1>GAME</h1>
      <p>Grant African Methodist Episcopal Church</p>

    </ContainerHeader>
    

  )
}

export default Header;

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: larger;
    font-weight: bold;
    margin: none;
    background-color: maroon;
    color: whitesmoke;                          

`;
