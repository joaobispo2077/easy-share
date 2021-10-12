import React, { useState } from 'react';

import { OptionsBarContext } from '.';

export const qrCodeOptions = ['url', 'text'] as const;

export type QRCodeOptions = typeof qrCodeOptions[number];

export const OptionsBarProvider: React.FC = ({ children }) => {
  const [selectedOptionBar, setSelectedOptionBar] =
    useState<QRCodeOptions>('url');

  return (
    <OptionsBarContext.Provider
      value={{
        selectedOptionBar,
        setSelectedOptionBar,
      }}
    >
      {children}
    </OptionsBarContext.Provider>
  );
};
