import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointmets = ({ dateValue }) => {
  const date = dateValue.toLocaleDateString();
  console.log(date);
  const { user, token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/appointments?email=${user.email}&date=${date}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          // history.push('/login')
          console.log("honono");
        }
      })

      .then((result) => {
        setAppointments(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date]);
  return (
    <Box>
      <Typography variant="h4"> Appointments </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>patientName</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments?.map((appointment) => (
              <TableRow
                key={appointment?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appointment.patientName}
                </TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appointmets;
