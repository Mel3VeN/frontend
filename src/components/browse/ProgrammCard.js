import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Heart } from '../../images/heart.svg';

const Card = styled.div`
  height: 215px;
  border-radius: 5px;
  margin-top: 20px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(29, 42, 115, 1);
`;

function ProgrammCard({ title, color, slug }) {
  // er loggt die Farben korrekt, sie werden nur nicht dargestellt
  return (
    <Card style={{ backgroundColor: color }}>
      <StyledLink to={`program/${slug}`}>
        <Topbar>
          <Heart src={Heart} alt="Herz" />
          <p>Neu</p>
        </Topbar>
        <ProgramName>{title}</ProgramName>
      </StyledLink>
    </Card>
  );
}

export default ProgrammCard;
