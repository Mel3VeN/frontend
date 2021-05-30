import styled from 'styled-components';

const Button = styled.button`
  background-color: #1d2a73;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 70%;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 21px;
  font-family: 'Montserrat';
`;
function StyledButton() {
  return <Button />;
}

export default Button;
