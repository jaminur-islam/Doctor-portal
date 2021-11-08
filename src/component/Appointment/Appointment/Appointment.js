import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../HOMe/Footer/Footer';
import NaviBar from '../../Shared/NaviBar/NaviBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AppointmentTime from '../AppointmentTime/AppointmentTime';

const Appointment = () => {
  const [dateValue, setDateValue] = React.useState(new Date());
  return (
    <Box>
     <NaviBar></NaviBar>
      <AppointmentHeader
      dateValue={dateValue}
      setDateValue={setDateValue}
      > </AppointmentHeader>
      <AppointmentTime 
       dateValue={dateValue}
       setDateValue={setDateValue}
      ></AppointmentTime>
      <Footer></Footer>
    </Box>
  );
};

export default Appointment;