import { ThemeProvider, Global } from '@emotion/react';
import theme from '@/styles/theme';
import reset from '@/styles/reset';
import { Header, Footer } from '@/components/organisms';
import type { AppProps } from 'next/app';

// import 'highlight.js/styles/';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
