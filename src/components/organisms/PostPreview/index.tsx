import styled from '@emotion/styled';
import { Text } from '@/components/atoms';
import { TagWrapper, renderedTags, TextWrapper } from '@/components/molcules';

interface IPostPreviewProps {
  title: string;
  description: string;
  tags: string;
}

export default function PostPreview({
  title,
  description,
  tags,
}: IPostPreviewProps) {
  return (
    <PostPreviewWrapepr>
      <Image href="#" />
      <TextWrapper direction="column">
        <TagWrapper>{renderedTags(tags)}</TagWrapper>
        <Text typo="title" mt="10px">
          {title}
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
  margin: 4rem auto;
  display: flex;
  flex-flow: row wrap;
`;

const Image = styled.image`
  width: 140px;
  height: 140px;
  margin-right: 4rem;
  background-color: red;
`;
