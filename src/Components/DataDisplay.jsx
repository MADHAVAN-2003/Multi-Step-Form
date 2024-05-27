import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../ContextData";

function DataDisplay() {
  const { finalData } = useContext(Context);
  return (
    <div>
      <TableContainer>
        <Table border="1" sx={{ margin: 2, width: "60%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>PhoneNumber</TableCell>
              <TableCell>Fathername</TableCell>
              <TableCell>Mothername</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((val) => {
              console.log(val, "values");
              return (
                <TableRow key={val.firstname}>
                  <TableCell>{val.firstname}</TableCell>
                  <TableCell>{val.lastname}</TableCell>
                  <TableCell>{val.phonenumber}</TableCell>
                  <TableCell>{val.fathername}</TableCell>
                  <TableCell>{val.mothername}</TableCell>
                  <TableCell>{val.country}</TableCell>
                  <TableCell>{val.state}</TableCell>
                  <TableCell>{val.city}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataDisplay;
