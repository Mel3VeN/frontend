import React from 'react';
import styled from 'styled-components';
import programImage from '../images/programmone.png';

const Wrapper = styled.div`
  margin-top: 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 22px;
`;

const Text = styled.p`
  font-size: 12px;
`;

const WorkoutTitle = styled.p`
  font-size: 16px;
  line-height: 21px;
`;
function DailyWorkout() {
  return (
    <div>
      <Wrapper>
        <Subtitle>Dein Workout heute</Subtitle>
        <Text>Trainingsplan</Text>
      </Wrapper>
      <img src={programImage} alt="Programm Vorschau" />
      <WorkoutTitle>Titel des Workouts</WorkoutTitle>
      <WorkoutTitle>Titel des Programms</WorkoutTitle>
      <Text>XXX kcal · 26 Min. · Beweglichkeit</Text>
    </div>
  );
}

export default DailyWorkout;
