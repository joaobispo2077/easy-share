import React from 'react';

import { Skeleton } from '@chakra-ui/react';

export const QRCodePanelSkeleton = () => {
  return (
    <>
      <Skeleton height="10rem" width="10rem" />
      <Skeleton height="2rem" w="100%" mt="2rem" />
      <Skeleton height="2rem" w="100%" mt="1rem" />
      <Skeleton
        isLoaded
        w="100%"
        display="flex"
        justifyContent="space-evenly"
        direction="row"
        spacing="1rem"
        mt="2rem"
      >
        <Skeleton height="2.5rem" w="7rem" />
        <Skeleton height="2.5rem" w="7rem" />
      </Skeleton>
    </>
  );
};
