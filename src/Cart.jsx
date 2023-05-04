import React, { useState } from 'react';

function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // add logic for adding item to cart
  };

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
