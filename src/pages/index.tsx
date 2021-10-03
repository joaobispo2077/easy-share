import type { NextPage } from 'next';

import { Flex, Heading } from '@chakra-ui/react';

import { OptionsBar } from '../components/OptionsBar';
import { Form } from '../components/Form';
import { Panel } from '../components/Panel';

const Home: NextPage = () => {
  return (
    <Flex>
      <Heading>Hello World</Heading>
      <OptionsBar />
      <Form />
      <Panel />
    </Flex>
  );
};

export default Home;
