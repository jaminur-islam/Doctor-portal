import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth'
import { CircularProgress} from "@mui/material"

const CheckOutForm = ({appointment}) => {
  const {price ,patientName , _id} = appointment
  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [error , setError] = useState('');
  const [clientSecret , setClientSecret] = useState('');
  const [success , setSuccess] = useState('')
  const [processing ,setProcessing]=useState(false)

  useEffect(()=>{
    fetch('https://radiant-beyond-52380.herokuapp.com/create-payment-intent' , {
      method: 'POST',
      headers:  {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({price})
    }).then(res => res.json())
    .then(result => {
      setClientSecret(result.clientSecret)
    })
  },[])

  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(!stripe || !elements){
      return
    }
    const card = elements.getElement(CardElement)
    if(card === null){
    return;
    }

    setProcessing(true)
    const {error , paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if(error){
      setError(error.message)
    }else{
      console.log(paymentMethod)
      const key = paymentMethod?.client_secret?.slice()
      setError('');
      
    }

    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email
          },
        },
      },
    );

    if(intentError){
      setError(intentError.message)
      setSuccess('')
    }else{
      setSuccess('Your payment processed successfully')
      setError('');
      setProcessing(false)
      const payment = {
        Name : user.displayName,
        amount: paymentIntent.amount,
        transaction: paymentIntent.id,
        created: paymentIntent.created
      }

      
      fetch(`https://radiant-beyond-52380.herokuapp.com/appointment/payment/${_id}` , {
        method : 'put',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(payment)
      }).then(res => res.json())
      .then(result => {
        setSuccess('Your payment processed successfully')
        console.log(result)
      })
    }



  }
  return (
   <div>
      <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    {
      processing ? <CircularProgress></CircularProgress>:<button type="submit" disabled={!stripe || success}>
      $ {price} Pay
      </button>
    }
  </form>
   {
     error && <p style={{color: 'red'}}> {error} </p>
   }
   {
     success && <p style={{color: 'green'}}>{success} </p>
   }
   </div>
  );
};

export default CheckOutForm;


/* 
1. install stripe and stripe-react
2. set publishable [key diye set kora]
3. create elements
4. CheckOutform [ekta compnent e bnanabo]
5  crate payment method
Server 
1. install korte hbe stripe ta ke
2. Stripe e taka ke poysha hisebe ney taie taka zoto hobe tar sathe [100] gun kore dite hbe

*/