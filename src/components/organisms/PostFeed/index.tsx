import styled from '@emotion/styled';

import { Text } from '@/components/atoms';
import { Post } from '@/components/organisms';

interface randomPostsProp {
  randomPosts: {
    posts: typeof Post[];
  };
}

export default function PostFeed({ randomPosts }: randomPostsProp) {
  // const renderedPosts =

  return (
    <WhiteContainer>
      <Text typo="subheading"> Random Posts </Text>
    </WhiteContainer>
  );
}

const WhiteContainer = styled.div`
  width: 350px;
  display: flex;
  flex-flow: row wrap;
  alignitems: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  margin: 60px 0 0 15%;
  box-sizing: border-box;
`;
