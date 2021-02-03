/**@jsxRuntime classic */
/**@jsx jsx */

import { ReactNode } from 'react';
import { jsx, css } from '@emotion/react';

type directionType = 'row' | 'column';

interface FlexWrapperProps {
  children: ReactNode;
  direction: directionType;
  className?: string;
}

const directionStyle = (direction: directionType) => {
  return css`
    flex-flow: ${direction} wrap;
  `;
};

const style = css`
  display: flex;
`;

function FlexWrapper({ children, direction, className }: FlexWrapperProps) {
  return (
    <div css={[directionStyle(direction), style]} className={className}>
      {children}
    </div>
  );
}

export default FlexWrapper;
