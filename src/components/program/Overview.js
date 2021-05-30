/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import React from 'react';
import { useQuery } from '@apollo/client';

import Programheader from './header/Programheader';
import { GET_PROGRAM_BY_SLUG } from '../../GraphQL/Queries';
import Infos from './body/Infos';
import Split from './body/Aufteilung/Split';

import Schedule from './body/Scheduling/Schedule';

function Overview({ match }) {
  const { slug } = match.params;
  const { loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  // calculate categories
  let total = 0;
  const countedCategories = data.allProgram[0].workouts.reduce(
    (acc, workout) => {
      const workoutCategories = workout.Workout.categories;
      const count = acc;
      workoutCategories.forEach((category) => {
        if (count[category] !== undefined) {
          count[category] += 1;
          total += 1;
        } else {
          count[category] = 1;
          total += 1;
        }
      });
      return count;
    },
    {}
  );

  // Workout days

  const workoutDays = data.allProgram[0].workouts;

  return (
    <div>
      <Programheader
        title={data.allProgram[0].title}
        difficulty={data.allProgram[0].difficulty}
        focus={data.allProgram[0].focus}
        duration={data.allProgram[0].duration}
        slug={slug}
      />
      <Infos description={data.allProgram[0].description} />
      <Split data={countedCategories} hundred={total} />
      <Schedule days={workoutDays} />
    </div>
  );
}

export default Overview;
