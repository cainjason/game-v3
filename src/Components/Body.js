import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

function Body() {
  return (
    <ContainerBody>
      <BodyInfo>
        <ReactPlayer
            className='react-player'
            url= 'https://fb.watc/qgW5DFex0T/'
            width='343%'
            height='100%'
            controls = {true} 
            />
      </BodyInfo>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div``;

const BodyInfo = styled.div``;
