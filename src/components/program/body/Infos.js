import react from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #f5ebdd;
`;

const Wrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const P = styled.p`
  padding: 1rem;
  line-height: 21px;
`;

function Infos({ description }) {
  return (
    <Background>
      <Wrapper>
        <P>{description}</P>
      </Wrapper>
    </Background>
  );
}

export default Infos;
