import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
const appointmentTime = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00AM",
    space: "10 spaces available",
    price: 20,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30AM",
    space: "10 spaces available",
    price: 17,
  },
  {
    id: 3,
    name: "Teeth Teeth Cleaning",
    time: "5:00 AM - 6:30AM",
    space: "10 spaces available",
    price: 17,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00 AM - 8:30AM",
    space: "10 spaces available",
    price: 12,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00AM",
    space: "10 spaces available",
    price: 18,
  },
  {
    id: 6,
    name: "Teeth Cleaning",
    time: "8:00 AM - 9:00AM",
    space: "10 spaces available",
    price: 23
  },
];

const AppointmentTime = ({ dateValue, setDateValue }) => {
  const [bookSuccess, setBookSuccess] = useState(false);
  return (
    <Container sx={{ mt: 20 }}>
      <Typography sx={{ textAlign: "center", my: 5 }} variant="h4">
        {" "}
        Available Appointments {dateValue.toDateString()}{" "}
      </Typography>
      {bookSuccess && (
        <Alert sx={{ mt: 2 }} severity="success">
          Appointment Booked successfully
        </Alert>
      )}
      <Grid container spacing={5}>
        {appointmentTime.map((appo) => (
          <AvailableAppointment
            key={appo.id}
            appointmentTime={appo}
            dateValue={dateValue}
            setBookSuccess={setBookSuccess}
          >
            {" "}
          </AvailableAppointment>
        ))}
      </Grid>
    </Container>
  );
};

export default AppointmentTime;
