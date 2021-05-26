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
function Split({ data }) {
  console.log(data);
  function calculate() {
    const hundred =
      data.strength + data.cardio + data.coordination + data.mobility;
    const strPercent = (data.strength * 100) / 28;
    // testen
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
    }
  }
  calculate();
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
