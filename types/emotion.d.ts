import '@emotion/react';
import theme from '../styles/theme';

interface customTheme {
  palette: {
    primary: string;
    lightgray: string;
    gray: string;
  };
  typography: {
    title: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };

    subheading: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
    };
  };
}
// interface customTheme {
//   palette: {
//     primary: '#f45d48';
//     secondary: '#0a8080';
//     background: '#f8f5f2';
//     white: '#ffffff';
//     black: '#222525';
//     lightgray: '#e2e2e2';
//     gray: '#8a8a8a';
//     darkgray: '#505050';
//   };
//   typography: {
//     title: {
//       fontFamily: '"Gelasio", serif';
//       fontSize: '4rem';
//       fontWeight: 600;
//     };
//     subtitle: {
//       fontFamily: '"Gelasio", serif';
//       fontSize: '2.5rem';
//       fontWeight: 600;
//       lineHeight: 1.1;
//     };
//     heading: {
//       fontFamily: '"Gelasio", serif';
//       fontSize: '1.5rem';
//       fontWeight: 500;
//     };
//     subheading: {
//       fontFamily: '"Lato", sans-serif';
//       fontSize: '1.25rem';
//       fontWeight: 700;
//     };
//     label: {
//       fontFamily: '"Lato", sans-serif';
//       fontWeight: 700;
//     };
//     description: {
//       fontFamily: '"Lato", sans-serif';
//       lineHeight: 1.5;
//     };
//     body: {
//       fontFamily: '"Lato", sans-serif';
//     };
//     caption: {
//       fontFamily: '"Lato", sans-serif';
//       fontSize: '0.875rem';
//     };
//     button: {
//       fontFamily: '"Lato", sans-serif';
//       fontSize: '0.875rem';
//     };
//     textbutton: {
//       fontFamily: '"Lato", sans-serif';
//       fontWeight: 700;
//       fontSize: '1rem';
//       border: 0;
//     };
//   };
// }

declare module '@emotion/react' {
  export interface Theme extends customTheme {}
}

declare module '@emotion/react' {
  export type paletteProp = keyof typeof theme.palette;
}

declare module '@emotion/react' {
  export type typoProp = keyof typeof theme.typography;
}
