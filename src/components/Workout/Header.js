import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Back } from '../../images/backBtn.svg';

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  padding-top: 1rem;
`;

const StyledBack = styled(Back)`
  align-self: flex-end;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const P = styled.p`
  font-size: 12px;
`;
function Header({ title }) {
  const history = useHistory();
  return (
    <Div>
      <P>{title}</P>
      <StyledBack onClick={history.goBack} />
    </Div>
  );
}

export default Header;
