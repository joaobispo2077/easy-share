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

type Inputs = {
  url: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
            type="url"
            w="100%"
            colorScheme="yellow"
            placeholder="Insira o link aqui..."
            _placeholder={{
              color: 'primary.500',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            {...register('url', { required: true })}
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
