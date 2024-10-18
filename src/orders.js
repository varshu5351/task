import React from 'react'
import {  useNavigate } from "react-router-dom";
const Orders = ({placed,setShowPopup,handleInputChange,handlePopupClose,handleOrderSubmit,showPopup,orderDetails,setConform}) => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const navigate = useNavigate();
    const handleOrder = () =>{
        // debugger
        setShowPopup(true)

    }
    const handleClick = () =>{
        navigate("/orders")
    }
    
  return (
    <div className="order-history-container">
    <h1 className="order-history-title">Orders</h1>
    {placed.length === 0 ? (
      <p className="no-orders">No orders yet!</p>
    ) : (  
      <ul className="order-list">
        {placed.map((order) => (
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
   { placed.length > 0 ?  
    <buttun className="order-button" style={{color:"white"}} onClick={handleOrder }>conform order</buttun> : "" }
     {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Order Details</h2>
            <form onSubmit={handleOrderSubmit}>
              <div className="form-group">
                <label htmlFor="tableNumber">Table Number:</label>
                <input
                  type="text"
                  id="tableNumber"
                  name="tableNumber"
                  value={orderDetails.tableNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Customer Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit"  className="confirm-button" onClick={handleClick}>
                Confirm Order
              </button>
              <button type="button" className="cancel-button" onClick={handlePopupClose}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
  </div>
  )
}

export default Orders