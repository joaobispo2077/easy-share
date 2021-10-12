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
import { useQRCode } from '../../hooks/useQRCode';

type Inputs = {
  url: string;
};

export const Form = () => {
  const { setQRCode, isQRCodeLoading, setIsQRCodeLoading } = useQRCode();
  const { selectedOptionBar } = useOptionsBar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsQRCodeLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setQRCode(data.url);
    setIsQRCodeLoading(false);
  };

  const getFormDataByOptionsBar = (optionBar: string) => {
    const formData = {
      url: {
        name: 'url',
        type: 'url',
        placeholder: 'Insira o link aqui...',
        text: 'link',
      },
      text: {
        name: 'text',
        type: 'text',
        placeholder: 'Insira o texto aqui...',
        text: 'texto',
      },
    };

    const data = formData[optionBar as keyof typeof formData] ?? formData.text;

    return data;
  };

  const selectedForm = getFormDataByOptionsBar(selectedOptionBar);

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
            type={selectedForm.type}
            w="100%"
            variant="filled"
            boxShadow="sm"
            placeholder={selectedForm.placeholder}
            _placeholder={{
              color: 'primary.500',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            {...register(selectedForm.name as keyof Inputs, {
              required: true,
            })}
            required
          />
          {!!errors.url && (
            <FormErrorMessage>{errors.url.message}</FormErrorMessage>
          )}
          <Text fontSize="sm" color="gray.500">
            Gere seu QR Code e compartilhe facilmente o seu {selectedForm.text}.
          </Text>
        </VStack>
      </FormControl>
      <Flex mt="5rem">
        <Button
          type="submit"
          colorScheme="green"
          isLoading={isQRCodeLoading}
          leftIcon={<Icon as={FiRefreshCcw} />}
        >
          Criar QR Code
        </Button>
      </Flex>
    </Flex>
  );
};
