/**@jsxRuntime classic */
/** @jsx jsx */

import { ReactNode } from 'react';

import { jsx, paletteProp } from '@emotion/react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant: paletteProp;
}

export default function Button({ onClick, children, variant }: ButtonProps) {
  return (
    <button
      css={[
        (theme) => ({
          backgroundColor: theme.palette[variant],
        }),
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
