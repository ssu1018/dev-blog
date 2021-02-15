import styled from '@emotion/styled';
import Link from 'next/link';
import { Text } from '@/components/atoms';
import { TagWrapper, renderedTags, TextWrapper } from '@/components/molcules';

interface IPostPreviewProps {
  title: string;
  description: string;
  tags: string;
  link: string;
}

export default function PostPreview({
  title,
  description,
  tags,
  link,
}: IPostPreviewProps) {
  return (
    <PostPreviewWrapepr>
      <TextWrapper direction="column">
        <TagWrapper>{renderedTags(tags)}</TagWrapper>
        <Text typo="title" mt="10px">
          <Link href={link}>{title}</Link>
        </Text>
        <Text typo="descript" mt="27px">
          {description}
        </Text>
      </TextWrapper>
    </PostPreviewWrapepr>
  );
}

const PostPreviewWrapepr = styled.div`
  width: 900px;
  margin: 3rem auto;
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem 1rem 1.5rem 2rem;
  border: 4px black solid;
`;
