import { Step, StepLabel, Stepper } from "@mui/material";
import "./App.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import { useContext } from "react";
import { Context } from "./ContextData";
import DataDisplay from "./Components/DataDisplay";

function App() {

  const{ currentStep } = useContext(Context)

  const showstep = (step)=>{
    switch(step){
      case 1 :
        return <FirstStep/>
      case 2 : 
        return <SecondStep/>
      case 3 :
        return <ThirdStep/>
      default :
       return ""        
    }
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Multi-Step Form</h1>
        <Stepper style={{ width: "18%" }} activeStep={currentStep-1}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showstep(currentStep)}
        <DataDisplay/>
        
      </div>
    </div>
  );
}

export default App;
