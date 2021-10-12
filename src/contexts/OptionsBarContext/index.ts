import { createContext } from 'react';

import { QRCodeOptions } from './OptionsBarProvider';

type OptionsBarContextData = {
  selectedOptionBar: QRCodeOptions;
  setSelectedOptionBar: (option: QRCodeOptions) => void;
};

export const OptionsBarContext = createContext<OptionsBarContextData>(
  {} as OptionsBarContextData,
);
