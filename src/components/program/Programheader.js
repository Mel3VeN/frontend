import React from 'react';
import styled from 'styled-components';

const Headerbackground = styled.div`
  background: linear-gradient(
      236.96deg,
      #ffb7d5 30.3%,
      rgba(255, 255, 255, 0) 101.13%
    ),
    #ffbe21;
  height: 75vh;
`;

const ProgramName = styled.h1`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`;

const Bottombar = styled.div`
  display: flex;
`;

function Programheader({ title }) {
  return (
    <Headerbackground>
      <ProgramName>{title}</ProgramName>
      <Bottombar />
    </Headerbackground>
  );
}

export default Programheader;
