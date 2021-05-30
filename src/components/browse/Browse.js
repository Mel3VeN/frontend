import React from 'react';
import styled from 'styled-components';
import Navbar from '../nav/Navbar';
import Cardview from './Cardview';

const Wrapper = styled.div`
  padding: 1rem;
`;

function Browse() {
  return (
    <div>
      <Wrapper>
        <h2>Browse</h2>
        <Cardview />
      </Wrapper>
      <Navbar />
    </div>
  );
}

export default Browse;
