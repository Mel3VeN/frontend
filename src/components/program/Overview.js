import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Programheader from './header/Programheader';
import { GET_PROGRAM_BY_SLUG } from '../../GraphQL/Queries';

function Overview({ match }) {
  console.log(match.params);
  const { slug } = match.params;
  const { error, loading, data } = useQuery(GET_PROGRAM_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Programheader title={data.allProgram[0].title} />
    </div>
  );
}

export default Overview;
