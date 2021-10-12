import React, { useRef, useState } from 'react';

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

type QRCodeDetailLevels = 'L' | 'M' | 'Q' | 'H';
export const Panel = () => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const qrCodeDetailLevels: QRCodeDetailLevels[] = ['L', 'M', 'Q', 'H'];

  const [detailLevel, setDetailLevel] = useState<QRCodeDetailLevels>('Q');
  const [qrCodeBackground, setQrCodeBackground] = useState<string>('#00298A');
  const [qrCodeForeground, setQrCodeForeground] = useState<string>('#FFFFFF');

  const downloadAsPng = async () => {
    await import('react-component-export-image').then((Exporter) =>
      Exporter.exportComponentAsPNG(qrCodeRef, {
        fileName: 'qr-code',
      }),
    );
  };

  const downloadAsJpg = async () => {
    await import('react-component-export-image').then((Exporter) =>
      Exporter.exportComponentAsJPEG(qrCodeRef, {
        fileName: 'qr-code',
      }),
    );
  };

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
      <div ref={qrCodeRef}>
        <QRCode
          value="http://facebook.github.io/react/"
          bgColor={qrCodeBackground}
          fgColor={qrCodeForeground}
          renderAs="svg"
          level={detailLevel}
        />
      </div>
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
                  {qrCodeDetailLevels.map((level) => (
                    <Button
                      key={level}
                      bgColor="primary.500"
                      colorScheme="green"
                      rounded="lg"
                      isActive={detailLevel === level}
                      onClick={() => setDetailLevel(level)}
                    >
                      {level}
                    </Button>
                  ))}
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
                        value={qrCodeBackground}
                        onChange={(event) =>
                          setQrCodeBackground(event.target.value)
                        }
                        border="none"
                      />
                    </Text>
                  </Box>

                  <Box w="100%" bgColor="primary.500" rounded="lg" p=".25rem">
                    <Text as="label">
                      Linhas:
                      <Input
                        id="qr-code-foreground"
                        name="qr-code-foreground"
                        type="color"
                        placeholder="Linhas"
                        value={qrCodeForeground}
                        onChange={(event) =>
                          setQrCodeForeground(event.target.value)
                        }
                        border="none"
                      />
                    </Text>
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
            onClick={downloadAsJpg}
          >
            <Text fontWeight="400">JPEG</Text>
          </Button>
          <Button
            size="lg"
            colorScheme="green"
            rounded="3xl"
            leftIcon={<Icon as={AiOutlineDownload} fontSize={24} />}
            padding="1.5rem"
            onClick={downloadAsPng}
          >
            <Text fontWeight="400">PNG</Text>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
