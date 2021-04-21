import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  text-align: center;
`;
const Linktext = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 4px;
`;
function Navlink({ image, text }) {
  return (
    <div>
      <LinkWrapper>
        <img src={image} alt="" />
        <Linktext>{text}</Linktext>
      </LinkWrapper>
    </div>
  );
}

export default Navlink;
