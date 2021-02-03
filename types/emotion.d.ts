import '@emotion/react';
import theme from '../src/styles/theme';

interface Font {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  color?: string;
}

type customTheme = typeof theme;

declare module '@emotion/react' {
  // export interface Theme extends customTheme {}
  export interface Theme extends customTheme {}
}

declare module '@emotion/react' {
  export type paletteProp = keyof typeof theme.palette;
}

declare module '@emotion/react' {
  export type typoProp = keyof typeof theme.typography;
}
