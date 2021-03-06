import styled from '@emotion/styled';
import { Text, UnderLineText } from '@/components/atoms';
import { TextWrapper } from '@/components/molcules';
import { Page } from '@/constants/pageRoute';

import Link from 'next/link';

function Header() {
  return (
    <HeaderWrapper>
      <Text typo="title">
        <Link href="/">정희수 블로그</Link>
      </Text>
      <TextWrapper direction="row">
        <UnderLineText typo="subheading" mr="20px">
          <Link href={Page.ABOUT.path}>{Page.ABOUT.name}</Link>
        </UnderLineText>
        <UnderLineText typo="subheading" mr="20px">
          <Link href={Page.CATEGORY.path}>{Page.CATEGORY.name}</Link>
        </UnderLineText>
      </TextWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 4rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-flow: row, nowrap;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
