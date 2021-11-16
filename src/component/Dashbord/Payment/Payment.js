import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jw3v5HGCqyVSIesYhIzHWnHugLlIg7uQUKd5houUAjo1igK2kioeLp32wnqcTw0SF2Q5DalOuo5MrOgy9mJVZdY008VOOTk8N');


const Payment = () => {

const {id} = useParams();
const [appointment , setAppointment] = useState({});
useEffect(()=>{
  fetch(`https://radiant-beyond-52380.herokuapp.com/appointment/${id}`)
  .then(res => res.json())
  .then(result => {
    setAppointment(result)
  })
} ,[])
  return (
    <div>
      <h2> Plase pay for: {appointment.patientName} for: {appointment.service} </h2>
      <h3> Pay: $ {appointment.price} </h3>
        
     {
       appointment.price && <Elements stripe={stripePromise}>
       <CheckOutForm
       appointment={appointment}
       />
       </Elements>
     }
    </div>
  );
};

export default Payment;