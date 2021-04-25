import React from 'react';
import ProgrammCard from './ProgrammCard';
import workouts from '../../dummydata/browse-workouts';

const Cardview = () => {
  const allCards = workouts.map((workout) => (
    <ProgrammCard title={workout.title} color={workout.color} id={workout.id} />
  ));
  return <div>{allCards}</div>;
};

export default Cardview;
