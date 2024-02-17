import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Calendar</a></li>
        <li><a href='#'>Our Ministries</a></li>
        <li><a href='#'>Helpful Infomation</a></li>
        <li><a href='#'>Contacts</a></li>
        <li><a href='#'>Online Giving</a></li>
        <li><a href='#'>Our Media</a></li>
      </ul>
    </ContainerNavbar>
  )
}

export default Navbar;

const ContainerNavbar = styled.div`
    height: 80vh;
    width: 260px;
`;
