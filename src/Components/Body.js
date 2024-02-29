import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

function Body() {
  return (
    <ContainerBody>
      <BodyInfo>
        <ReactPlayer
            className='react-player'
            url= 'https://fb.watch/qwnk1TYKj5/'
						width='100%'
						height='100%'
            controls = {true} 
            />
      </BodyInfo>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div``;

const BodyInfo = styled.div`
	height: 514px;
	width: 1000px;		
`;

