import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Programheader from './header/Programheader';
import { GET_PROGRAM_BY_SLUG } from '../../GraphQL/Queries';
import Infos from './body/Infos';

function Overview({ match }) {
  console.log(match.params);
  const { slug } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  console.log();

  return (
    <div>
      <Programheader
        title={data.allProgram[0].title}
        difficulty={data.allProgram[0].difficulty}
        focus={data.allProgram[0].focus}
        duration={data.allProgram[0].duration}
      />
      <Infos description={data.allProgram[0].description} />
    </div>
  );
}

export default Overview;
