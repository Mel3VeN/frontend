import react from 'react';
import styled from 'styled-components';
import Navlink from '../nav/Navlink';

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 0px;
  background-color: black;
  position: absolute;
  bottom: 0;
`;

function Menubar({ text, image }) {
  return (
    <StyledBar>
      <Navlink text={text} image={image} />
    </StyledBar>
  );
}

export default Menubar;
