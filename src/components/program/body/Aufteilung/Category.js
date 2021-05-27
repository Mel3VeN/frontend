import react from 'react';
import styled from 'styled-components';

const CatWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 1rem;
`;
const Color = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50px;
  margin-right: 1rem;
`;
function Category({ title, color }) {
  return (
    <CatWrapper>
      <Color style={{ backgroundColor: color }} />
      <p>{title}</p>
    </CatWrapper>
  );
}

export default Category;
