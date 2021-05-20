import React from 'react';
import { useQuery } from '@apollo/client';
import ProgrammCard from './ProgrammCard';
import workouts from '../../dummydata/browse-workouts';
import { GET_PROGRAMMS } from '../../GraphQL/Queries';

const Cardview = () => {
  const { error, loading, data } = useQuery(GET_PROGRAMMS);
  console.log(error);
  if (loading) {
    return <div>loading...</div>;
  }

  const programs = data?.allProgram;
  console.log(programs[0].slug.current);
  const allCards = programs.map((program) => (
    <ProgrammCard
      title={program.title}
      key={program._id}
      color="#F5EBDD"
      slug={program.slug.current}
    />
  ));
  return <div>{allCards}</div>;
};

export default Cardview;
