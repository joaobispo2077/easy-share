import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { OptionsBarProvider } from '../contexts/OptionsBarContext/OptionsBarProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <OptionsBarProvider>
        <Component {...pageProps} />
      </OptionsBarProvider>
    </ChakraProvider>
  );
}
export default MyApp;
