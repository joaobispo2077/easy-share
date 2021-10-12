import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { OptionsBarProvider } from '../contexts/OptionsBarContext/OptionsBarProvider';
import { QRCodeProvider } from '../contexts/QRCodeContext/QRCodeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <OptionsBarProvider>
        <QRCodeProvider>
          <Component {...pageProps} />
        </QRCodeProvider>
      </OptionsBarProvider>
    </ChakraProvider>
  );
}
export default MyApp;
