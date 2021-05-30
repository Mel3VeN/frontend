import ReactSvgPieChart from 'react-svg-piechart';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 160px;
  height: 160px;
`;

function Chart({ categories }) {
  function setColor() {
    categories.forEach(function (element) {
      if (element.title === 'cardio') {
        element.color = '#939C91';
      } else if (element.title === 'strength') {
        element.color = '#7A8778';
      } else if (element.title === 'mobility') {
        element.color = '#D2DDD0';
      } else if (element.title === 'coordination') {
        element.color = '#BBC8B9';
      }
    });
    return categories;
  }
  return (
    <Wrapper>
      <ReactSvgPieChart data={setColor()} />
    </Wrapper>
  );
}

export default Chart;
