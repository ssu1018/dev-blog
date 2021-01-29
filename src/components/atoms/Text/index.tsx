/**@jsxRuntime classic */
/** @jsx jsx */

import { jsx, typoProp, css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
interface LinkProps extends MarginProps {
  children: ReactNode;
  typo: typoProp;
}
interface MarginProps {
  mr?: string;
  mt?: string;
}

function Text({ children, typo, mr, mt }: LinkProps) {
  return (
    <p
      css={(theme) => {
        return {
          ...theme.typography[typo],
          marginTop: mt,
          marginRight: mr,
        };
      }}
    >
      {children}
    </p>
  );
}

export default Text;
