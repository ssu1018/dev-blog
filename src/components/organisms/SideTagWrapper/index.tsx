import styled from '@emotion/styled';

import { Tag } from '@/components/molcules';
import { Text } from '@/components/atoms';
import mq from '@/constants/mediaQuery';

interface SideBarProps {
  tags: string[];
}

export default function SideTagWrapper({ tags }: SideBarProps) {
  const rendendTags = tags.map((tag) => (
    <Tag tag={tag} key={tag} typo="subheading" />
  ));
  return (
    <SideWrapper>
      <div>
        <Text typo="title" color="black">
          태그들
        </Text>
      </div>
      <TagsWrapper>{rendendTags}</TagsWrapper>
    </SideWrapper>
  );
}

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 6px;
  border-radius: 10px;
  align-items: center;
`;

const SideWrapper = styled.aside`
  position: absolute;
  width: 190px;
  right: 4%;
  top: 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  padding: 2rem 2rem 1rem 2rem;
  ${mq[3]} {
    display: none;
  }
`;
