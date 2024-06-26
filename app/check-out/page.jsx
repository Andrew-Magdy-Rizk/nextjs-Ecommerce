"use client"
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51PVAxB00QiqcB3SWlCzsXQLf7dNdd7I3HaETVPsphdJYgk5SDgK0Oe8eG84HDS8RK4DHiKeoAVsyS3VXb6x51SIh00KS29fS5E');
function CheckOut({hidden, Total}) {
    const options = {
        mode: 'payment',
        currency: 'usd',
        amount: Total * 100,
      };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm  checkOut={hidden} getTotal={Total}/>
    </Elements>
  )
}

export default CheckOut;