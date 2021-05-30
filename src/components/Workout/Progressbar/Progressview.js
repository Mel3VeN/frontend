import { useState } from 'react';
import styled from 'styled-components';
import ProgEmpty from './ProgEmpty';

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;
function Progressview({ workout }) {
  const [state, setState] = useState({ isLast: false, isDone: false });
  let k = 0;
  function lastItem() {
    setState({ isLast: true });
  }

  const progress = workout.map((element, l) => {
    if (l === workout.length - 1) {
      // eslint-disable-next-line react/jsx-boolean-value
      return <ProgEmpty key={(k += 1)} status={true} />;
    }

    return <ProgEmpty key={(k += 1)} status={false} />;
  });
  return <Container>{progress}</Container>;
}

export default Progressview;
