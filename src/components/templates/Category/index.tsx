import { categories } from '@/constants/categories';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Text } from '@/components/atoms';

export default function Categories() {
  const renderedCategories = categories.map((category) => (
    <CategoryBox key={category.title}>
      <Text typo="title">
        <Link href={category.info.path}>{category.title}</Link>
      </Text>
      <Text typo="subheading" mt="30px">
        {category.detail}
      </Text>
    </CategoryBox>
  ));

  return <Wrapper>{renderedCategories}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  fle
`;

const CategoryBox = styled.div`
  border: 3px black solid;
  margin: 30px;
  padding: 50px;
  flex: 1 0 43%;
  box-sizing: border-box;
`;
