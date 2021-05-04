import React from 'react';
import styled from 'styled-components';
import DailyWorkout from './DailyWorkout';
import Navbar from '../nav/Navbar';
import dashData from '../../dummydata/dash-data';
import { greeting } from '../../Utility/greeting';

const Title = styled.h1`
  max-width: 50px;
  line-height: 43px;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;
// dynmaic greeting

function Dashboard() {
  const hello = greeting();
  return (
    <div className="Dashboard">
      <Wrapper>
        <Title>{hello} Name</Title>
        <DailyWorkout
          title={dashData[0].titleWorkout}
          program={dashData[0].titleProgram}
          kcal={dashData[0].kcal}
          minutes={dashData[0].min}
          type={dashData[0].type}
        />
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Dashboard;
