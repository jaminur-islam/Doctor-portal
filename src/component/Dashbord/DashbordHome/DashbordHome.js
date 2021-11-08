import React from "react";
import { Grid } from "@mui/material";
import Calender from "../../Shared/Calender/Calender";
import Appointmets from "../Appointments/Appointmets";
import { Box } from "@mui/system";

const DashbordHome = () => {
  const [dateValue, setDateValue] = React.useState(new Date());
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Calender
            dateValue={dateValue}
            setDateValue={setDateValue}
          ></Calender>
        </Grid>
        <Grid item md={7}>
          <Appointmets dateValue={dateValue}></Appointmets>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashbordHome;
