import Link from 'next/link';

import styled from '@emotion/styled';

import { Text } from '@/components/atoms';

import { TCategoryName } from '@/constants/categories';

export interface IPostDataProp {
  title: string;
  slug: string;
  date: string;
  tags: string;
}

export interface IPostProp {
  post: IPostDataProp;
  category: TCategoryName;
}

export function Post({ post, category }: IPostProp) {
  const { slug, title, tags } = post;

  category = category.toLowerCase() as typeof category;

  const renderedTag = tags.split(',').map((tag) => (
    <Text typo="descript" color="indigo" key={tag}>
      <Link href={`tags/${tag}`}>{tag}</Link>
    </Text>
  ));

  return (
    <Wrapper>
      <Text typo="subheading">
        <Link href={`${category}/${slug}`}>{title}</Link>
      </Text>
      {renderedTag}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-flow: row wrap;
  margin-top: 15px;
`;
