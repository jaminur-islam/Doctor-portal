import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mymodal from "../Modal/Mymodal";

const AvailableAppointment = ({
  appointmentTime,
  dateValue,
  setBookSuccess,
 
}) => {
  const { name, space, time , price } = appointmentTime;
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <Grid item md={4}>
      <Box
        style={{ border: "2px solid pink", margin: "20px", padding: "20px" }}
      >
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6" sx={{ fontSize: "14px", my: 1 }}>
          {time}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "12px" }}>
          {space}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "12px" }}>
          price: $ {price}
        </Typography>
        <Button
          onClick={() => setOpenModal(true)}
          sx={{ mt: 1 }}
          variant="contained"
        >
          
          Book AppointMent
        </Button>
      </Box>
      <Mymodal
        openModal={openModal}
        setOpenModal={setOpenModal}
        appointmentTime={appointmentTime}
        dateValue={dateValue}
        setBookSuccess={setBookSuccess}
      ></Mymodal>
    </Grid>
  );
};

export default AvailableAppointment;
