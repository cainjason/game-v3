import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <ContainerHeader>
      <h1>GAME</h1>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
`;
