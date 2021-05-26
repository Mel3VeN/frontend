/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Programheader from './header/Programheader';
import { GET_PROGRAM_BY_SLUG } from '../../GraphQL/Queries';
import Infos from './body/Infos';
import Split from './body/Aufteilung/Split';
import { categoryCounter } from '../../Utility/categoryCounter';

function Overview({ match }) {
  const { slug } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  // calculate categories
  const loadedCategories = [];
  data.allProgram[0].workouts.forEach((element) =>
    loadedCategories.push(element.Workout.categories)
  );
  const categories = categoryCounter(loadedCategories.flat());
  console.log(categories);
  return (
    <div>
      <Programheader
        title={data.allProgram[0].title}
        difficulty={data.allProgram[0].difficulty}
        focus={data.allProgram[0].focus}
        duration={data.allProgram[0].duration}
      />
      <Infos description={data.allProgram[0].description} />
      <Split data={categories} />
    </div>
  );
}

export default Overview;
