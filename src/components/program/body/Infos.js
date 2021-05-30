import styled from 'styled-components';

const Background = styled.div`
  background-color: #f5ebdd;
`;

const P = styled.p`
  padding: 1rem;
  line-height: 21px;
`;

function Infos({ description }) {
  return (
    <Background>
      <P>{description}</P>
    </Background>
  );
}

export default Infos;
