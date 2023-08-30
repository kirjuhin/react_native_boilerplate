import React from 'react';

export default combineContextProviders = (...components) => {
  return components.reduce(
    (AccumulatedContextProviders, CurrentContextProvider) => {
      return ({ children }) => {
        return (
          <AccumulatedContextProviders>
            <CurrentContextProvider>{children}</CurrentContextProvider>
          </AccumulatedContextProviders>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};
