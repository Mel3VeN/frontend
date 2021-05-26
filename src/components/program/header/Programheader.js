import React from 'react';
import styled from 'styled-components';
import Menubar from './Menubar';
import Navlink from '../../nav/Navlink';

const Headerbackground = styled.div`
  background: linear-gradient(
      236.96deg,
      #ffb7d5 30.3%,
      rgba(255, 255, 255, 0) 101.13%
    ),
    #ffbe21;
  height: 75vh;
  position: relative;
`;

const ProgramName = styled.h1`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 300px;
`;

function Programheader({ title, difficulty, duration, focus }) {
  return (
    <Headerbackground>
      <ProgramName>{title}</ProgramName>
      <Menubar difficulty={difficulty} duration={duration} focus={focus} />
    </Headerbackground>
  );
}

export default Programheader;
