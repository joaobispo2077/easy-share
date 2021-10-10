import React from 'react';

import { VStack, Input, Button, Icon, Text, Flex } from '@chakra-ui/react';
import { FiRefreshCcw } from 'react-icons/fi';

export const Form = () => {
  return (
    <Flex
      as="form"
      height="100%"
      justify="center"
      align="center"
      flex="2"
      direction="column"
      padding="2rem"
    >
      <VStack>
        <Input
          w="100%"
          colorScheme="yellow"
          placeholder="Insira o link aqui"
          _placeholder={{
            color: 'primary.500',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        />
        <Text fontSize="sm" color="gray.500">
          Gere seu QR Code e compartilhe facilmente o seu link.
        </Text>
      </VStack>
      <Flex mt="5rem">
        <Button
          type="submit"
          colorScheme="green"
          leftIcon={<Icon as={FiRefreshCcw} />}
        >
          Criar QR Code
        </Button>
      </Flex>
    </Flex>
  );
};
