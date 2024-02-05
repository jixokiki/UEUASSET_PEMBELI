import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [paymentUrl, setPaymentUrl] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/create-virtual-account'); // Mengirim permintaan ke server Node.js
      setPaymentUrl(response.data.paymentUrl); // Menyimpan URL pembayaran dari respons index.js di server
    } catch (error) {
      console.error('Error creating virtual account transaction:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Buat Pembayaran Virtual Account</button>
      {paymentUrl && <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Bayar Sekarang</a>}
    </div>
  );
};

export default PaymentComponent;
