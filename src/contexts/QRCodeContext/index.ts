import { createContext } from 'react';

type QRCodeContextData = {
  qrCode: string;
  setQRCode: (qrCode: string) => void;
  isQRCodeLoading: boolean;
  setIsQRCodeLoading: (isQRCodeLoading: boolean) => void;
  isQRCodeTrackeable: boolean;
  setIsQRCodeTrackeable: (isQRCodeTrackeable: boolean) => void;
};

export const QRCodeContext = createContext<QRCodeContextData>(
  {} as QRCodeContextData,
);
