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

function Overview({ match }) {
  const { slug } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  const categories = [];
  const count = {};
  data.allProgram[0].workouts.forEach((element) =>
    categories.push(element.Workout.categories)
  );
  const flattedCategories = categories.flat();
  function zumChecken(arr) {
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == count[arr[i]]) {
        i++;
      } else {
        count[arr[i]] = 0;
      }
    }
    for (i = 0; i < arr.length; i++) {
      count[arr[i]] += 1;
    }
    console.log(count);
  }
  zumChecken(flattedCategories);

  return (
    <div>
      <Programheader
        title={data.allProgram[0].title}
        difficulty={data.allProgram[0].difficulty}
        focus={data.allProgram[0].focus}
        duration={data.allProgram[0].duration}
      />
      <Infos description={data.allProgram[0].description} />
      <Split data={data.allProgram[0].workouts.categories} />
    </div>
  );
}

export default Overview;
