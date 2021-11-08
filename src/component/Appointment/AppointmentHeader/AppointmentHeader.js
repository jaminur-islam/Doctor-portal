import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../../images/chair.png";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import Calender from "../../Shared/Calender/Calender";

const AppointmentHeader = ({ dateValue, setDateValue }) => {
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Calender
              dateValue={dateValue}
              setDateValue={setDateValue}
            ></Calender>
          </Grid>
          <Grid item md={6}>
            <img width="500" src={img} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
