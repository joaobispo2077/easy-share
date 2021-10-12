import { useContext } from 'react';

import { OptionsBarContext } from '../contexts/OptionsBarContext';

export function useOptionsBar() {
  const context = useContext(OptionsBarContext);

  return context;
}
