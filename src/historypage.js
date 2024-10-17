import React, { useState, useEffect } from 'react';
import './orderhistorypage.css'; // Importing CSS file

const OrderHistoryPage = ({placed}) => {
 


  const date = new Date().getDate()
  


  return (
    <div className="order-history-container">
      <h1 className="order-history-title">Order History</h1>
      {placed.length === 0 ? (
        <p className="no-orders">No orders yet!</p>
      ) : (
        <ul className="order-list">
          {placed.map((order) => (
            <li key={order.id} className="order-item">
              <h2>Order{order.id}</h2>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong></strong> {order.status}</p>
              <p></p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryPage;
