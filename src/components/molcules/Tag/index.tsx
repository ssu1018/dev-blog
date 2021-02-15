import styled from '@emotion/styled';
import Link from 'next/link';

import { Text } from '@/components/atoms';
import { typoProp } from '@emotion/react';

interface TagProps {
  tag: string;
  border?: boolean;
  typo?: typoProp;
}

export default function Tag({ tag, border, typo = 'tag' }: TagProps) {
  return (
    <TagBox border={border}>
      <Text typo={typo} color="black">
        <Link href={`/tags/${tag.trim()}`}>{tag}</Link>
      </Text>
    </TagBox>
  );
}

const TagBox = styled.div`
  padding: 4px 6px;
  margin: 0.6rem 0.2rem;
  border-radius: 10px;
  border: ${(props: { border: boolean | undefined }) =>
    props.border && '1px #000 solid'};
  align-items: center;
  line-height: 20px;
  :hover {
    border: 0.2rem black solid;
    margin: 0.4rem 0rem;
  }
`;
