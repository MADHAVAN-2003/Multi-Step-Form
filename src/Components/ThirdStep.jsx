import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../ContextData";

function ThirdStep() {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(Context);
  const [error, setError] = useState({});
  // console.log(userData)
  const handleNext = () => {
    let newError = {};
    if (!userData.country) {
      newError = { ...newError, country: "Country is req" };
    }
    if (!userData.state) {
      newError = { ...newError, state: "State is req" };
    }
    if (!userData.city) {
      newError = { ...newError, city: "City is req" };
    }
    if (Object.keys(newError).length === 0) {
      submitData();
    } else {
      setError(newError);
    }
  };

  return (
    <div>
      <div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            color="secondary"
            label="Country"
            name="country"
            value={userData.country || ""}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
            error={Boolean(error.country)}
            helperText={error.country}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            color="secondary"
            label="State"
            name="state"
            value={userData.state || ""}
            onChange={(e) =>
              setUserData({ ...userData, state: e.target.value })
            }
            error={Boolean(error.state)}
            helperText={error.state}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            color="secondary"
            label="City"
            name="city"
            value={userData.city || ""}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
            error={Boolean(error.city)}
            helperText={error.city}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Button variant="outlined" onClick={() => setCurrentStep(2)}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ThirdStep;
