import react from 'react';
import ReactSvgPieChart from 'react-svg-piechart';
import styled from 'styled-components';

const data = [
  { title: 'Krafttraining', value: 100, color: '#7A8778' },
  { title: 'Cardio', value: 50, color: '#939C91' },
  { title: 'Koordination', value: 70, color: '#BBC8B9' },
  { title: 'Beweglichkeit', value: 30, color: '#D2DDD0' },
];

const Wrapper = styled.div`
  width: 160px;
  height: 160px;
`;

function Chart() {
  return (
    <Wrapper>
      <ReactSvgPieChart data={data} />
    </Wrapper>
  );
}

export default Chart;
