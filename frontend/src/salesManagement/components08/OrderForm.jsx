import React, { useState } from 'react';

function OrderForm() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderData = { product, quantity };

    // Send order data to backend using Fetch API (or Axios)
    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });

    const availability = await response.json();
    // Update UI to display availability (Yes/No)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product:
        <select value={product} onChange={(e) => setProduct(e.target.value)}>
          {/* Populate options dynamically or with static values */}
        </select>
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button type="submit">Check Availability</button>
    </form>
  );
}

export default OrderForm;
