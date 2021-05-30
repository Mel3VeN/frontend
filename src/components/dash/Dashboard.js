import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import DailyWorkout from './DailyWorkout';
import Navbar from '../nav/Navbar';
import dashData from '../../dummydata/dash-data';
import { greeting } from '../../Utility/greeting';
import { GET_WORKOUTS } from '../../GraphQL/Queries';

const Title = styled.h1`
  max-width: 50px;
  line-height: 43px;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

function Dashboard() {
  const hello = greeting();
  const { error, loading, data } = useQuery(GET_WORKOUTS);
  console.log(error);
  if (loading) {
    return (
      <div className="Dashboard">
        <Wrapper>
          <Title>{hello} Name</Title>
          <div>loading...</div>
        </Wrapper>
        <Navbar />
      </div>
    );
  }
  const workout = data?.allProgram;

  return (
    <div className="Dashboard">
      <Wrapper>
        <Title>{hello} Name</Title>
        {loading ? (
          <div>loading...</div>
        ) : (
          <DailyWorkout
            title={workout[0].workouts[0].Workout.title}
            program={workout[0].title}
            kcal={workout[0].workouts[0].Workout.calories}
            minutes={dashData[0].min}
            type={dashData[0].type}
            img={data?.allProgram[0].workouts[0].Workout.image.asset.url}
          />
        )}
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Dashboard;
