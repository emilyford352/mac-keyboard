import React from 'react';
import styled from 'styled-components';
import Keys from './Keys';

const StyledSpeaker = styled.div`
    margin: 1rem;
    background-color: lightgray;
    height: 100%;
    flex: 1;
    display: grid;
    grid-column-gap: .1rem;
    grid-template-columns: repeat(20, 0fr);
`;

const SpeakerDot = styled.div`

`;

const Speaker = () => {
  const dots = Array(200).fill(1);
  debugger;
  return (
    <StyledSpeaker>
        {dots.map(() => <SpeakerDot>.</SpeakerDot>)}
    </StyledSpeaker>
  );
}

export default Speaker;
