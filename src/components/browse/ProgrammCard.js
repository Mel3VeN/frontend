import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../../images/heart.svg';

const Card = styled.div`
  height: 215px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #f5ebdd;
  &:last-child {
    margin-bottom: 25%;
  }
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

function ProgrammCard({ title, color }) {
  // er loggt die Farben korrekt, sie werden nur nicht dargestellt
  console.log(color);
  return (
    <Card style={{ backgroundColor: { color } }}>
      <Topbar>
        <Heart src={Heart} alt="Herz" />
        <p>Neu</p>
      </Topbar>
      <ProgramName>{title}</ProgramName>
    </Card>
  );
}

export default ProgrammCard;
