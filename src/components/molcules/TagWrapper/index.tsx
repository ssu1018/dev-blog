import styled from '@emotion/styled';
import { Tag } from '@/components/molcules';
import { ReactNode } from 'react';

interface ITagWrapperProps {
  children: ReactNode;
}

export const renderedTags = (tags: string) =>
  tags.split(',').map((tag) => <Tag tag={tag} />);

export default function TagWrapper({ children }: ITagWrapperProps) {
  return <DefaultTagWrapper>{children}</DefaultTagWrapper>;
}

const DefaultTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
