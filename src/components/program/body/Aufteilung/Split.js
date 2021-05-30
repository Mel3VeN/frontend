import styled from 'styled-components';
import Chart from './Chart';
import Categories from './Categories';

const H3 = styled.h3`
  padding: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-around;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
function Split({ data, hundred }) {
  function calculate() {
    const percent = [];
    for (const [key, value] of Object.entries(data)) {
      const obj = {};
      obj.title = key;
      obj.value = (value * 100) / hundred;
      percent.push(obj);
    }

    return percent;
  }
  const calculated = calculate();
  return (
    <div>
      <H3>So ist das Programm aufgeteilt:</H3>
      <Wrapper>
        <Chart categories={calculated} />
        <Categories categories={calculated} />
      </Wrapper>
    </div>
  );
}

export default Split;
