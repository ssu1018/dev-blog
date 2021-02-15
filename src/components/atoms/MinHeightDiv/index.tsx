import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface IDiv {
  children: ReactNode;
}

export default function Div({ children }: IDiv) {
  return <CustomDiv>{children}</CustomDiv>;
}

const CustomDiv = styled.div`
  min-height: 100%;
  padding-bottom: 3rem;
  box-sizing: border-box;
`;
