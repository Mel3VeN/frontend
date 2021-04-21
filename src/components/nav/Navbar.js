import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navlink from './Navlink';
import images from '../../imagesJS';

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(29, 42, 115, 1);
`;

function Navbar() {
  return (
    <div>
      <Nav>
        <Links>
          <StyledLink to="/">
            <li>
              <Navlink image={images[0].image} text={images[0].text} />
            </li>
          </StyledLink>
          <StyledLink to="/browse">
            <li>
              <Navlink image={images[1].image} text={images[1].text} />
            </li>
          </StyledLink>
          <StyledLink to="/">
            <li>
              <Navlink image={images[2].image} text={images[2].text} />
            </li>
          </StyledLink>
        </Links>
      </Nav>
    </div>
  );
}

export default Navbar;
