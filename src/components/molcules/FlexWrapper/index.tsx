/**@jsxRuntime classic */
/**@jsx jsx */

import { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

interface FlexWrapperProps {
  children: ReactNode;
  align: 'start' | 'end';
  className?: string;
}

const alignStyle = (align: 'start' | 'end') => {
  const alignType = align === 'start' ? 'flex-start' : 'flex-end';
  return css({
    justifySelf: alignType,
  });
};

const style = css`
  display: flex;
  flex-flow: row wrap;
`;

function FlexWrapper({ children, align, className }: FlexWrapperProps) {
  return (
    <div css={[alignStyle(align), style]} className={className}>
      {children}
    </div>
  );
}

export default FlexWrapper;
