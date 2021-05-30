import react from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_WORKOUT_BY_SLUG } from '../../GraphQL/Queries';
import Header from './Header';
import Progressview from './Progressbar/Progressview';
import Infobody from './Infobody';

const Background = styled.div`
  background: linear-gradient(
      236.96deg,
      #ffb7d5 30.3%,
      rgba(255, 255, 255, 0) 101.13%
    ),
    #ffbe21;
  height: 100vh;
`;

const Body = styled(Infobody)`
  width: 20px;
  margin-left: 20px;
  color: black;
`;
function Workout({ match }) {
  const { slug } = match.params;
  const { number } = match.params;
  const { loading, data } = useQuery(GET_WORKOUT_BY_SLUG, {
    variables: { slug },
  });
  if (loading) {
    return <div>loading...</div>;
  }

  const currentWorkout = data.allProgram[0].workouts[number].Workout.exercises;
  return (
    <Background>
      <Header title={data.allProgram[0].title} />
      <Progressview workout={currentWorkout} />
      <Infobody className={Body} />
    </Background>
  );
}

export default Workout;
