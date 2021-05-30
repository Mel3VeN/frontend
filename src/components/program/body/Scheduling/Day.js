import styled from 'styled-components';
import { ReactComponent as Heart } from '../../../../images/heart.svg';

const Background = styled.div`
  width: 275px;
  height: 80px;
  background-color: white;
  padding: 3%;

  margin-top: 5%;
`;

const P = styled.p`
  font-size: 12px;
`;

const Hearty = styled(Heart)`
  width: 12px;
  height: 12px;
  display: block;
  margin-top: 1rem;
`;
function Daily({ day, kcal, time, category }) {
  console.log(category);
  return (
    <Background>
      <p>Tag {day}</p>
      <P>
        {kcal} kcal · {time} Min. · {category}
      </P>
      <Hearty />
    </Background>
  );
}
export default Daily;
