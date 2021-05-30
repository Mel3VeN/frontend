import React from 'react';
import styled from 'styled-components';

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

const Img = styled.img`
  width: 375px;
  height: 214px;
  object-fit: cover;
`;
function DailyWorkout({ title, program, kcal, minutes, type, img }) {
  return (
    <div>
      <Wrapper>
        <Subtitle>Dein Workout heute</Subtitle>
        <Text>Trainingsplan</Text>
      </Wrapper>
      <Img src={img} alt="Programm Vorschau" />
      <WorkoutTitle>{title}</WorkoutTitle>
      <WorkoutTitle>{program}</WorkoutTitle>
      <Text>
        {kcal} kcal · {minutes} Min. · {type}
      </Text>
    </div>
  );
}

export default DailyWorkout;
