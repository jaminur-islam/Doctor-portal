import { Button, Fade, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const Mymodal = ({
  openModal,
  setOpenModal,
  appointmentTime,
  dateValue,
  setBookSuccess,
}) => {
  const { time, name } = appointmentTime;
  console.log(name);

  const { user } = useAuth();

  const handleClose = () => setOpenModal(false);
  // set booking initial data
  const initialinfo = {
    patientName: user.displayName,
    email: user.email,
  };
  const [bookinginfo, setBookingInfo] = useState(initialinfo);
  // handle on blur
  const handleOnBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookinginfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);
  };

  // handle book submit function
  const handleBookSubmit = (e) => {
    e.preventDefault();
    // booking appointments data
    const appointment = {
      ...bookinginfo,
      time,
      date: dateValue.toLocaleDateString(),
      service: name,
    };
    // send to server
    fetch("https://radiant-beyond-52380.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          console.log(result);
          handleClose();
        }
      });

    console.log(appointment);

    alert("appointments successfully");
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>

            <form onSubmit={handleBookSubmit}>
              <TextField
                id="outlined-name"
                disabled
                value={time}
                sx={{ marginTop: "10px", width: "90%" }}
              />
              <TextField
                required
                id="outlined-name"
                defaultValue={user.displayName}
                sx={{ marginTop: "10px", width: "90%" }}
                onBlur={handleOnBlur}
                name="patientName"
              />
              <TextField
                required
                id="outlined-name"
                defaultValue={user.email}
                sx={{ marginTop: "10px", width: "90%" }}
                onBlur={handleOnBlur}
                name="email"
              />
              <TextField
                required
                id="outlined-name"
                placeholder="Your Number  : "
                sx={{ marginTop: "10px", width: "90%" }}
                onBlur={handleOnBlur}
                name="number"
              />

              <TextField
                id="outlined-name"
                disabled
                defaultValue={dateValue.toDateString()}
                sx={{ marginTop: "10px", width: "90%" }}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "10px", width: "90%" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Mymodal;
