import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <NavbarHeader>
				<NavbarInfo>
				<ul>
					<li><a href='#home'>Home</a></li>
					<li><a href='#calendar'>Calendar</a></li>
					<li><a href='#ministries'>Our Ministries</a></li>
					<li><a href='#infomation'>Helpful Infomation</a></li>
					<li><a href='#contacts'>Contacts</a></li>
					<li><a href='#giving'>Online Giving</a></li>
					<li><a href='#media'>Our Media</a></li>
      	</ul>
				</NavbarInfo>
			</NavbarHeader>
    </ContainerNavbar>
  )
}

export default Navbar;

const ContainerNavbar = styled.div`
    height: 65vh;
    width: 260px;
		flex: 0.3;
		color: whitesmoke;
		background-color: lightsalmon;
`;

const NavbarHeader = styled.div``;

const NavbarInfo = styled.div``;
