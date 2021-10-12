import React from 'react';

import {
  VStack,
  Input,
  Button,
  Icon,
  Text,
  Flex,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FiRefreshCcw } from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useOptionsBar } from '../../hooks/useOptionsBar';
type Inputs = {
  url: string;
};

export const Form = () => {
  const { selectedOptionBar } = useOptionsBar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const getinputDataByOptionBar = (optionBar: string) => {
    switch (optionBar) {
      case 'url':
        return {
          name: 'url',
          type: 'url',
          placeholder: 'Insira o link aqui...',
        };
      case 'text':
        return {
          name: 'text',
          type: 'text',
          placeholder: 'Insira o texto aqui...',
        };
      default:
        return {
          name: 'url',
          type: 'url',
          placeholder: 'Insira o link aqui...',
        };
    }
  };

  return (
    <Flex
      as="form"
      height="100%"
      justify="center"
      align="center"
      flex="2"
      direction="column"
      padding="2rem"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.url}>
        <VStack align="flex-start">
          <Input
            type={getinputDataByOptionBar(selectedOptionBar).type}
            w="100%"
            colorScheme="yellow"
            placeholder={getinputDataByOptionBar(selectedOptionBar).placeholder}
            _placeholder={{
              color: 'primary.500',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            {...register(getinputDataByOptionBar(selectedOptionBar).name, {
              required: true,
            })}
            required
          />
          {!!errors.url && (
            <FormErrorMessage>{errors.url.message}</FormErrorMessage>
          )}
          <Text fontSize="sm" color="gray.500">
            Gere seu QR Code e compartilhe facilmente o seu link.
          </Text>
        </VStack>
      </FormControl>
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
