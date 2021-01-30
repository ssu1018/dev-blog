/**@jsxRuntime classic */
/** @jsx jsx */

import { jsx, paletteProp, typoProp } from '@emotion/react';
import { ReactNode } from 'react';

interface LinkProps extends MarginProps {
  children: ReactNode;
  typo: typoProp;
  color?: paletteProp;
}
interface MarginProps {
  mr?: string;
  mt?: string;
}

function Text({ children, typo, mr, mt, color }: LinkProps) {
  return (
    <p
      css={(theme) => {
        return {
          ...theme.typography[typo],
          marginTop: mt,
          marginRight: mr,
          color,
        };
      }}
    >
      {children}
    </p>
  );
}

export default Text;
