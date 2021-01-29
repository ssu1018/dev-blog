import { ThemeProvider, Global } from '@emotion/react';
import theme from 'styles/theme';
import reset from 'styles/reset';
import { Header, Footer } from '@/components/organisms';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
