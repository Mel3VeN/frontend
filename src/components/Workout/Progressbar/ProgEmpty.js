import styled from 'styled-components';
import { ReactComponent as Circle } from '../../../images/ProgCircle.svg';
import { ReactComponent as Dots } from '../../../images/Dots.svg';

const SDots = styled(Dots)``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
function ProgEmpty({ status }) {
  if (status === true)
    return (
      <Container>
        <Circle />
      </Container>
    );
  return (
    <Container>
      <Circle />
      <Dots />
    </Container>
  );
}

export default ProgEmpty;
