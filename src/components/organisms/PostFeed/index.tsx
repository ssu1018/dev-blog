import styled from '@emotion/styled';

import { IPostDataProp } from '@/components/organisms';
import { Post } from '@/components/molcules';
import { TCategoryName } from '@/constants/categories';
interface randomPostsProp {
  randomPosts: IPostDataProp[];
  category: TCategoryName;
}

export default function PostFeed({ randomPosts, category }: randomPostsProp) {
  const renderedPosts = randomPosts.map((post) => (
    <Post post={post} key={post.title} category={category} />
  ));

  return <WhiteContainer>{renderedPosts}</WhiteContainer>;
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
  margin: 60px 0 0 15%;
  box-sizing: border-box;
`;
