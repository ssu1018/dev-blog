import Link from 'next/link';

import styled from '@emotion/styled';

import { Text } from '@/components/atoms';
import { TextWrapper } from '@/components/molcules';
interface PostProps {
  post: {
    link: string;
    title: string;
    tags: string[];
  };
}

export default function Post({ post }: PostProps) {
  const { link, title, tags } = post;
  const renderedTags = tags.map((tag) => (
    <Text typo="descript" color="indigo">
      #{tag}
    </Text>
  ));
  return (
    <Wrapper>
      <Text typo="subheading">
        <Link href={`/${link}`}>{title}</Link>
      </Text>
      <TextWrapper direction="row">{renderedTags}</TextWrapper>
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
