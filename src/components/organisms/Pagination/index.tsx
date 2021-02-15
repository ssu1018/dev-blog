/**@jsxRuntime classic */
/**@jsx jsx */

import { MouseEvent, useMemo } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

interface IPagination {
  onPageClick: (e: MouseEvent) => void;
  num: number;
  currPage: number;
}

export default function Pagination({
  onPageClick,
  currPage,
  num = 0,
}: IPagination) {
  const pageNumArr: number[] = useMemo(
    () => new Array(num).fill(0).map((_, ind) => ind + 1),
    [num, onPageClick]
  );

  const renderedPagination = pageNumArr.map((num) => (
    <Li
      value={num}
      onClick={onPageClick}
      key={num}
      css={num === currPage && activePageStyle}
    >
      {num}
    </Li>
  ));

  return (
    <PageNumWrapper>
      <Li value={1} onClick={onPageClick}>
        start
      </Li>
      {renderedPagination}
      <Li value={num} onClick={onPageClick}>
        end
      </Li>
    </PageNumWrapper>
  );
}

const PageNumWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  font-size: 1.3rem;
  color: black;
  padding: 0.1rem;
  margin: 0.9rem;
  align-items: center;
  cursor: pointer;
`;

const activePageStyle = css`
  font-weight: 600;
`;
