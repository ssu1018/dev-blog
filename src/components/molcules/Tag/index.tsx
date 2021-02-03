import styled from '@emotion/styled';
import Link from 'next/link';

import { Text } from '@/components/atoms';

interface TagProps {
  tag: string;
  border?: boolean;
}

export default function Tag({ tag, border }: TagProps) {
  return (
    <TagBox border={border}>
      <Text typo="tag" color="black">
        <Link href={`/tags/${tag}`}>{tag}</Link>
      </Text>
    </TagBox>
  );
}

const TagBox = styled.div`
  padding: 4px 6px;
  margin: 8px 10px 0 0;
  border-radius: 10px;
  border: ${(props: { border: boolean | undefined }) =>
    props.border && '1px #000 solid'}
  align-items: center;
  line-height: 20px;
`;
