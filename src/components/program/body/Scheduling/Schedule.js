import styled from 'styled-components';
import react, { useState, useEffect, useRef } from 'react';
import Scheduleview from './Scheduleview';

const Background = styled.div`
  background-color: #f5ebdd;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
`;

const Button = styled.button`
  background-color: Transparent;
  color: #1d2a73;
  border: none;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
`;

function Schedule({ days }) {
  const [show, showAll] = useState(false);
  let buttonText = '';
  if (show === false) {
    buttonText = 'Alle anzeigen';
  } else {
    buttonText = 'Weniger anzeigen';
  }
  return (
    <Background>
      <Header>
        <h3>21 Tage</h3>
        <Button onClick={() => showAll((value) => !value)} type="button">
          {buttonText}
        </Button>
      </Header>
      <Scheduleview days={days} status={show} />
    </Background>
  );
}

export default Schedule;
