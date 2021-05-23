import react from 'react';
import styled from 'styled-components';
import Chart from './Chart';

const H3 = styled.h3`
  padding: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;
function Split() {
  return (
    <div>
      <H3>So ist das Programm aufgeteilt:</H3>
      <Wrapper>
        <Chart />
      </Wrapper>
    </div>
  );
}

export default Split;
