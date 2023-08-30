import React, { useState } from "react";
import { BoilerplateContext } from "./BoilerplateContext";

export default BoilerplateProvider = ({ children }) => {
  const [data, setData] = useState('Hello world');

  const updateData = newData => {
    setData(newData);
  };

  return (
    <BoilerplateContext.Provider value={{ data, updateData }}>
      {children}
    </BoilerplateContext.Provider>
  );
};
