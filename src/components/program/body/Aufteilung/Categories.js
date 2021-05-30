import styled from 'styled-components';
import Category from './Category';

const CategoryWrapper = styled.div`
  display: flex;
  width: 160px;
  flex-direction: column;
  justify-content: center;
`;

function Categories({ categories }) {
  const labels = categories.map((category, index) => (
    <Category key={index} title={category.title} color={category.color} />
  ));
  return <CategoryWrapper>{labels}</CategoryWrapper>;
}

export default Categories;
