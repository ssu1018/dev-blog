import styled from '@emotion/styled';

import { Tag } from '@/components/molcules';
import { Text } from '@/components/atoms';

interface SideBarProps {
  tags: string[];
}

export default function SideTagWrapper({ tags }: SideBarProps) {
  const rendendTags = tags.map((tag) => <Tag tag={tag} key={tag} />);
  return (
    <SideWrapper>
      <div>
        <Text typo="title" color="black">
          Tags
        </Text>
      </div>
      <TagsWrapper>{rendendTags}</TagsWrapper>
    </SideWrapper>
  );
}

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 6px;
  border-radius: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SideWrapper = styled.aside`
  width: 280px;
  position: fixed;
  right: 4%;
  top: 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
