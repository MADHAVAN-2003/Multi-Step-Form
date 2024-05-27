import React, { createContext, useState } from "react";
import App from "./App";

export const Context = createContext();
function ContextData() {
  //values
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
  };
  return (
    <Context.Provider
      value={{
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        submitData,
        finalData,
      }}
    >
      <App />
    </Context.Provider>
  );
}

export default ContextData;
