import React from 'react';
import styled from 'styled-components';
import ProgrammCard from './ProgrammCard';
import Navbar from '../nav/Navbar';

const Wrapper = styled.div`
  padding: 1rem;
`;

function Browse() {
  return (
    <div>
      <Wrapper>
        <h2>Browse</h2>
        <ProgrammCard />
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Browse;
