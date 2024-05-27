import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../ContextData";

function FirstStep() {
  const { setCurrentStep, userData, setUserData } = useContext(Context);
  const [error, setError] = useState({});
  // console.log(userData)
  const handleNext = () => {
    let newError = {};
    if (!userData.firstname) {
      newError = { ...newError, firstname: "firstname is req" };
    }
    if (!userData.lastname) {
      newError = { ...newError, lastname: "Lastname is req" };
    }
    if (!userData.phonenumber) {
      newError = { ...newError, phonenumber: "Phonenumber is req" };
    }
    if (Object.keys(newError).length === 0) {
      setCurrentStep(2);
    } else {
      setError(newError);
    }
  };
  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          color="secondary"
          label="FirstName"
          name="firstname"
          value={userData.firstname || ""}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          error={Boolean(error.firstname)}
          helperText={error.firstname}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          color="secondary"
          label="LastName"
          name="lastname"
          value={userData.lastname || ""}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          error={Boolean(error.lastname)}
          helperText={error.lastname}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          margin="normal"
          color="secondary"
          label="Phone Number"
          name="phonenumber"
          value={userData.phonenumber || ""}
          onChange={(e) =>
            setUserData({ ...userData, phonenumber: e.target.value })
          }
          error={Boolean(error.phonenumber)}
          helperText={error.phonenumber}
        />
      </div>
      <div>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default FirstStep;
