import type { NextPage } from 'next';

import Head from 'next/head';
import { Flex, Heading, VStack } from '@chakra-ui/react';

import { OptionsBar } from '../components/OptionsBar';
import { Form } from '../components/Form';
import { Panel } from '../components/Panel';

const Home: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bgColor="gray.200"
      padding="3.5rem"
      spacing="1rem"
    >
      <Head>
        <title>QR Code - Easy share</title>
      </Head>
      <VStack spacing="1rem">
        <Heading color="primary.500" as="h1">
          Q
        </Heading>
        <OptionsBar />
      </VStack>
      <Form />
      <Panel />
    </Flex>
  );
};

export default Home;
