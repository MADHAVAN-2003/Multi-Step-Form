import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../ContextData";

function SecondStep() {
  const { setCurrentStep, userData, setUserData } = useContext(Context);
  const [error, setError] = useState({});
  // console.log(userData)
  const handleNext = () => {
    let newError = {};
    if (!userData.fathername) {
      newError = { ...newError, fathername: "fathername is req" };
    }
    if (!userData.mothername) {
      newError = { ...newError, mothername: "mothername is req" };
    }
    if (!userData.parentmobilenumber) {
      newError = {
        ...newError,
        parentmobilenumber: "ParentMobileNumber is req",
      };
    }
    if (Object.keys(newError).length === 0) {
      setCurrentStep(3);
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
            label="FatherName"
            name="fathername"
            value={userData.fathername || ""}
            onChange={(e) =>
              setUserData({ ...userData, fathername: e.target.value })
            }
            error={Boolean(error.fathername)}
            helperText={error.fathername}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            color="secondary"
            label="MotherName"
            name="mothername"
            value={userData.mothername || ""}
            onChange={(e) =>
              setUserData({ ...userData, mothername: e.target.value })
            }
            error={Boolean(error.mothername)}
            helperText={error.mothername}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            color="secondary"
            label="Parent MobileNumber"
            name="parentmobilenumber"
            value={userData.parentmobilenumber || ""}
            onChange={(e) =>
              setUserData({ ...userData, parentmobilenumber: e.target.value })
            }
            error={Boolean(error.parentmobilenumber)}
            helperText={error.parentmobilenumber}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Button variant="outlined" onClick={() => setCurrentStep(1)}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
