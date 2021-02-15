import { Text } from '@/components/atoms';
import { TagWrapper, TextWrapper } from '@/components/molcules';
import { Tag } from '@/components/molcules';
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
  const renderedTag = postTag
    .split(',')
    .map((tag) => <Tag tag={tag} key={tag} />);

  return (
    <div>
      <Text typo="postTitle">{postTitle}</Text>
      <Text typo="subheading" mt="20px">
        {date}
      </Text>
      <TagWrapper>{renderedTag}</TagWrapper>
    </div>
  );
}
