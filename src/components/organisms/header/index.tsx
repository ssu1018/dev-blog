import styled from '@emotion/styled';
import { Text } from '@/components/atoms';
import { TextWrapper } from '@/components/molcules';

import Link from 'next/link';

function Header() {
  return (
    <HeaderWrapper>
      <Text typo="title">
        <Link href="/">정희수 블로그</Link>
      </Text>
      <TextWrapper align="end">
        <Text typo="subheading" mr="20px">
          <Link href="/about">about</Link>
        </Text>
        <Text typo="subheading" mr="20px">
          <Link href="/categories">categories</Link>
        </Text>
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

const CustomText = styled.div`
  color: red;
`;

export default Header;
