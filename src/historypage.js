import React from 'react';
import './orderhistorypage.css'; // Importing CSS file

const OrderHistoryPage = ({ placed }) => {

  
const orderlist = window.localStorage.getItem("orderlist")
const filteredlist = JSON.parse(orderlist)
debugger
  const currentDate = new Date();
  const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`; // Format date as DD/MM/YYYY

  return (
    <div className="order-history-container">
      <h1 className="order-history-title">Order History</h1>
      {filteredlist.length === 0 ? (
        <p className="no-orders">No orders yet!</p>
      ) : (  
        <ul className="order-list">
          {filteredlist.map((order) => (
            <li key={order.id} className="order-item">
              <h2>Order {order.id}</h2>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>category:</strong> {order.category}</p>

              <p><strong>Price:</strong> ₹{order.price}</p>
              <p><strong>totalPrice:</strong> {order.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryPage;
