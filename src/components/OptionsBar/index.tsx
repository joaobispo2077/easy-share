import React from 'react';

import { Button, Icon, VStack } from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import { FiType } from 'react-icons/fi';

export const OptionsBar = () => {
  return (
    <VStack
      backgroundColor="gray.100"
      p="1.5rem"
      spacing="1.5rem"
      boxShadow="2xl"
      borderRadius="3rem"
    >
      <Button
        isActive={true}
        borderRadius="5rem"
        _active={{
          bg: 'primary.500',
          color: 'white',
        }}
        _hover={{ bg: 'primary.400', color: 'white' }}
      >
        <Icon as={AiOutlineLink} fontSize={20} />
      </Button>
      <Button
        borderRadius="5rem"
        _hover={{ bg: 'primary.400', color: 'white' }}
      >
        <Icon as={FiType} fontSize={20} />
      </Button>
    </VStack>
  );
};
