import react from 'react';
import styled from 'styled-components';
import Genericlink from '../../general/Genericlink';
import images from '../../../imagesJS';

const StyledBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

function Menubar({ difficulty, focus, duration }) {
  console.log(difficulty);
  return (
    <StyledBar>
      <Genericlink text={difficulty} image={images[3].image} />
      <Genericlink text={focus} image={images[3].image} />
      <Genericlink text={`${duration} weeks`} image={images[3].image} />
    </StyledBar>
  );
}

export default Menubar;
