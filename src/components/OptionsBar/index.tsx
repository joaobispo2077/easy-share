import React from 'react';

import { Button, Icon, VStack } from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
import { FiType } from 'react-icons/fi';
import { IconType } from 'react-icons';

import {
  qrCodeOptions,
  QRCodeOptions,
} from '../../contexts/OptionsBarContext/OptionsBarProvider';
import { useOptionsBar } from '../../hooks/useOptionsBar';

type OptionsBarIcons = { [key in QRCodeOptions]: IconType };

const iconComponentByOption: OptionsBarIcons = {
  url: AiOutlineLink,
  text: FiType,
};

export const OptionsBar = () => {
  const { selectedOptionBar, setSelectedOptionBar } = useOptionsBar();

  return (
    <VStack
      backgroundColor="gray.100"
      p="1.5rem"
      spacing="1.5rem"
      boxShadow="2xl"
      borderRadius="3rem"
    >
      {qrCodeOptions.map((option) => (
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
