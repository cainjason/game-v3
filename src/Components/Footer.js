import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <ContainerFooter>
      <p>© 2023 Grant A.M.E. All Rights Reserved.</p>
      <p>1906 Washington St. Boston, MA 02118</p>
      <p>(617) 427-0670</p>
      <p>Info.game.bos@gmail.com</p>
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
