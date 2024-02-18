import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <ContainerNavbar>
      <NavbarHeader>
				<NavbarInfo>
			
					<h2><a href='/'>Home</a></h2>
					<h2><a href='#calendar'>Calendar</a></h2>
					<h2><a href='#ministries'>Our Ministries</a></h2>
					<h2><a href='#infomation'>Helpful Infomation</a></h2>
					<h2><a href='#contacts'>Contacts</a></h2>
					<h2><a href='#giving'>Online Giving</a></h2>
					<h2><a href='#media'>Our Media</a></h2>
      	
				</NavbarInfo>
			</NavbarHeader>
    </ContainerNavbar>
  )
}

export default Navbar;

const ContainerNavbar = styled.div`
    	height: 65vh;
		text-decoration: none;
		font-weight: bold;
		font-size: large;
		display: inline;
		box-sizing: border-box;
	    width: 260px;
		color: white;
		background-color: maroon;

		a {
			text-decoration: none;
			color: white;

		}

		a:hover {
			color: burlywood;
		}

		h2 {
			margin-left: 10px;
			color: white;

		}

		h2:hover {
			background-color: black;
			color: royalblue;
		}
`;

const NavbarHeader = styled.div``;

const NavbarInfo = styled.div``;
