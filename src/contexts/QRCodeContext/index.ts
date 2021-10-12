import { createContext } from 'react';

type QRCodeContextData = {
  qrCode: string;
  isTrackeable: boolean;
};

export const QRCodeContext = createContext<QRCodeContextData>(
  {} as QRCodeContextData,
);
