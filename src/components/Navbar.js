import React from 'react';
import styled from 'styled-components';
import Navlink from './Navlink';
import images from '../imagesJS';

const Nav = styled.nav`
  background-color: #f5ebdd;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  padding: 3px;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Navbar() {
  return (
    <div>
      <Nav>
        <Links>
          <li>
            <Navlink image={images[0].image} text={images[0].text} />
          </li>
          <li>
            <Navlink image={images[1].image} text={images[1].text} />
          </li>
          <li>
            <Navlink image={images[2].image} text={images[2].text} />
          </li>
        </Links>
      </Nav>
    </div>
  );
}

export default Navbar;
