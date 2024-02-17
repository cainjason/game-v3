import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <ContainerFooter>
      <p>email</p>
      <p>phone number</p>
      <p>copyright</p>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.div`
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
