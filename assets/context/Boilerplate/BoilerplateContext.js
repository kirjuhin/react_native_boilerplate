import { createContext, useContext } from 'react';

export const BoilerplateContext = createContext();

export const useBoilerplateContext = () => {
  return useContext(BoilerplateContext);
};
