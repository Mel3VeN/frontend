import React from 'react';
import styled from 'styled-components';
import DailyWorkout from './DailyWorkout';
import Navbar from '../nav/Navbar';

const Title = styled.h1`
  max-width: 50px;
  line-height: 43px;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

function Dashboard() {
  return (
    <div className="Dashboard">
      <Wrapper>
        <Title>Guten Morgen, Name</Title>
        <DailyWorkout />
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Dashboard;
