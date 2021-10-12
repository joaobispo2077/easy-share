import React, { useState } from 'react';

import { QRCodeContext } from '.';

export const QRCodeProvider: React.FC = ({ children }) => {
  const [qrCode, setQRCode] = useState<string>('I love u Viviane <3');
  const [isQRCodeLoading, setIsQRCodeLoading] = useState<boolean>(false);
  const [isQRCodeTrackeable, setIsQRCodeTrackeable] = useState<boolean>(false);

  const QRCodeProviderData = {
    qrCode,
    setQRCode,
    isQRCodeLoading,
    setIsQRCodeLoading,
    isQRCodeTrackeable,
    setIsQRCodeTrackeable,
  };

  return (
    <QRCodeContext.Provider value={QRCodeProviderData}>
      {children}
    </QRCodeContext.Provider>
  );
};
