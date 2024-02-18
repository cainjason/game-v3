import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <ContainerFooter>
      <FooterInfo>
      <p><a href='/'>© 2023 Grant A.M.E. All Rights Reserved.</a></p>
      <p><a href='/'>1906 Washington St. Boston, MA 02118</a></p>
      <p><a href='/'>Call Us: (617) 427-0670</a></p>
      <p><a href='/'>Info.game.bos@gmail.com</a></p>
      </FooterInfo>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.div`
  height: 100px;
  width: 100%;
  flex-direction: row;
  background-color: lightslategray;
  color: white;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: larger;
  font-weight: bold;
  
`;
