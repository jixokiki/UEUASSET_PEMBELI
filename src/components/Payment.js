import React from 'react'
import PaymentComponent from './PaymentComponent'
import Navbar from './Navbar'
import "./Payment.css"

const Payment = () => {
  return (
    <div className='paymentclass'>
        <h1>Shopping Cart</h1>
        <Navbar/>
      <PaymentComponent/>
    </div>
  )
}

export default Payment
