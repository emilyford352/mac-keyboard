import React from 'react';
import styled from 'styled-components';
import Keys from './Keys';
import Speaker from './Speaker';

const StyledKeyboard = styled.div`
    background-color: #B76E79;
    height: 34.45rem;
    width: 50rem;
    border-radius: .7rem;
    margin: auto;
    margin-top: 1rem;
`;

const KeysContainer = styled.div`
    height: 50%;
    display: flex;
`;

const TrackPadContainer = styled.div`
    height: 50%;
`;

const Keyboard = () => {
  return (
    <StyledKeyboard>
        <KeysContainer>
            <Speaker/>
            <Keys/>
            <Speaker/>
        </KeysContainer>
        <TrackPadContainer>
            trackpad
        </TrackPadContainer>
    </StyledKeyboard>
  );
}

export default Keyboard;
