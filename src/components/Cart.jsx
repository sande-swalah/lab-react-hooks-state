import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item, idx) => (
            <li key={idx}>{item.name} is in your cart.</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
