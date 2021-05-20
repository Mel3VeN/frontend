import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  text-align: center;
`;
const Linktext = styled.p`
  text-transform: uppercase;
  font-size: 12px;
`;
function GenericLink({ image, text }) {
  return (
    <div>
      <LinkWrapper>
        <img src={image} alt="" />
        <Linktext>{text}</Linktext>
      </LinkWrapper>
    </div>
  );
}

export default GenericLink;
