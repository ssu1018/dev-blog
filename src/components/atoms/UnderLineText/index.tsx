/**@jsxRuntime classic */
/** @jsx jsx */

import { jsx, paletteProp, typoProp, css } from '@emotion/react';
import { ReactNode } from 'react';

interface IUnderLineText extends MarginProps {
  children: ReactNode;
  typo: typoProp;
  color?: paletteProp;
}
interface MarginProps {
  mr?: string;
  mt?: string;
}

function UnderLineText({ children, typo, mr, mt, color }: IUnderLineText) {
  return (
    <p
      css={[
        (theme) => {
          return {
            ...theme.typography[typo],
            marginTop: mt,
            marginRight: mr,
            color,
          };
        },
        underLineStyle,
      ]}
    >
      {children}
    </p>
  );
}

export default UnderLineText;

const underLineStyle = css`
  padding: 0.5rem;
  :hover {
    border-bottom: 0.2rem solid black;
    padding-bottom: 0.3rem;
  }
`;
