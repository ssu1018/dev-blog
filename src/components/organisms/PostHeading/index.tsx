import { Text } from '@/components/atoms';
import { TagWrapper } from '@/components/molcules';
import { Tag } from '@/components/molcules';
import styled from '@emotion/styled';

interface IPostHeadingProps {
  postTitle: string;
  postTag: string;
  date: string;
}

export default function PostHeading({
  postTitle,
  postTag,
  date,
}: IPostHeadingProps) {
  const renderedTag = postTag.split(',').map((tag) => <Tag tag={tag} />);

  return (
    <div>
      <Text typo="postTitle">{postTitle}</Text>
      <Text typo="title">{date}</Text>
      <TagWrapper>{renderedTag}</TagWrapper>
    </div>
  );
}
