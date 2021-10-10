import React from 'react';

import QRCode from 'qrcode.react';
import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  VStack,
  Button,
  ButtonGroup,
  Input,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
export const Panel = () => {
  return (
    <Flex
      flex="1"
      backgroundColor="primary.500"
      rounded="3xl"
      padding="3rem"
      direction="column"
      alignItems="center"
      overflow="hidden"
    >
      <Flex>
        <QRCode
          value="http://facebook.github.io/react/"
          bgColor="#00298A"
          fgColor="#FFFFFF"
          renderAs="svg"
          level="Q"
        />
      </Flex>
      <Flex w="100%" mt="2rem">
        <Accordion allowToggle w="100%">
          <VStack spacing="1rem" w="100%">
            <AccordionItem
              border="none"
              w="100%"
              bgColor="primary.400"
              rounded="lg"
            >
              <Text as="h2" color="white">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Nível de detalhe
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                <ButtonGroup color="white" spacing="1rem" width="100%">
                  <Button
                    bgColor="primary.500"
                    colorScheme="blue"
                    rounded="lg"
                    isActive={true}
                  >
                    L
                  </Button>
                  <Button bgColor="primary.500" colorScheme="blue" rounded="lg">
                    M
                  </Button>
                  <Button bgColor="primary.500" colorScheme="blue" rounded="lg">
                    Q
                  </Button>
                  <Button bgColor="primary.500" colorScheme="blue" rounded="lg">
                    H
                  </Button>
                </ButtonGroup>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              border="none"
              w="100%"
              bgColor="primary.400"
              rounded="lg"
            >
              <Text as="h2" color="white">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Cores
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4} color="white">
                <VStack spacing="1rem" w="100%">
                  <Box w="100%" bgColor="primary.500" rounded="lg" p=".25rem">
                    <Text as="label">
                      Background:
                      <Input
                        id="qr-code-background"
                        name="qr-code-background"
                        type="color"
                        placeholder="Background"
                        value="#00298A"
                      />
                    </Text>
                  </Box>

                  <Box w="100%" bgColor="primary.500" rounded="lg" p=".25rem">
                    <Text as="label">Linhas</Text>
                    <Input type="color" placeholder="Linhas" value="#FFFFFF" />
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </VStack>
        </Accordion>
      </Flex>
      <Flex mt="2rem">
        <ButtonGroup spacing="1rem" w="100%">
          <Button
            size="lg"
            colorScheme="green"
            rounded="3xl"
            leftIcon={<Icon as={AiOutlineDownload} fontSize={24} />}
            padding="1.5rem"
          >
            <Text fontWeight="400">JPEG</Text>
          </Button>
          <Button
            size="lg"
            colorScheme="green"
            rounded="3xl"
            leftIcon={<Icon as={AiOutlineDownload} fontSize={24} />}
            padding="1.5rem"
          >
            <Text fontWeight="400">SVG/EPS</Text>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
