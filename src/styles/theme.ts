import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#3DBCFA',
      400: '#1139A0',
      500: '#00298A',
    },
    secondary: {
      500: '#FF9B04',
    },
  },
});

export { theme };
