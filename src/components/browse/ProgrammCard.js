import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../../images/heart.svg';

const Card = styled.div`
  background-color: #f5ebdd;
  height: 215px;
  border-radius: 5px;
`;

const ProgramName = styled.h2`
  position: relative;
  top: 36%;
  transform: translateY(-50%);
  text-align: center;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 0px;
`;

function ProgrammCard() {
  return (
    <Card>
      <Topbar>
        <Heart src={Heart} alt="Herz" />
        <p>Neu</p>
      </Topbar>
      <ProgramName>Titel des Programms</ProgramName>
    </Card>
  );
}

export default ProgrammCard;
