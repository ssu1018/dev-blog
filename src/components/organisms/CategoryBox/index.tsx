import { categories } from '@/constants/categories';
import Link from 'next/link';
import styled from '@emotion/styled';

export default function Categories() {
  const renderedCategories = categories.map((category) => (
    <CategoryBox key={category.title}>
      <h1>
        <Link href={category.info.path}>{category.title}</Link>
      </h1>
      <div>{category.detail}</div>
    </CategoryBox>
  ));

  return <Wrapper>{renderedCategories}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const CategoryBox = styled.div`
  border: 2px black solid;
  margin: 30px;
`;
