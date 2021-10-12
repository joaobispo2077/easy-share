import React, { useState } from 'react';

import { Button, Icon, VStack } from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import { FiType } from 'react-icons/fi';
import { IconType } from 'react-icons';

const options = ['url', 'text'] as const;

type Options = typeof options[number];
type OptionsBarIcons = { [key in Options]: IconType };

const iconComponentByOption: OptionsBarIcons = {
  url: AiOutlineLink,
  text: FiType,
};

export const OptionsBar = () => {
  const [selectedOptionBar, setSelectedOptionBar] = useState<Options>('url');

  return (
    <VStack
      backgroundColor="gray.100"
      p="1.5rem"
      spacing="1.5rem"
      boxShadow="2xl"
      borderRadius="3rem"
    >
      {options.map((option) => (
        <Button
          key={option}
          isActive={selectedOptionBar === option}
          borderRadius="5rem"
          _active={{
            bg: 'primary.500',
            color: 'white',
          }}
          _hover={{ bg: 'primary.400', color: 'white' }}
          onClick={() => setSelectedOptionBar(option)}
        >
          <Icon as={iconComponentByOption[option]} fontSize={20} />
        </Button>
      ))}
    </VStack>
  );
};
