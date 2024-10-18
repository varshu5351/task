
import React from 'react';
import './menupage.css'; // Importing the CSS
// import { BsPhoneVibrate } from 'react-icons/bs';

const MenuPage = ({orders,setShowPopup,setOrders,setPlaced,handleInputChange,handlePopupClose,handleOrderSubmit,showPopup,orderDetails}) => {
    const handleOrderNow = (order) => {
        setShowPopup(true)
        if (order.available_quantity > 0) {
            // Decrease available quantity
            setOrders((prevOrders) =>
                prevOrders.map((o) =>
                    o.id === order.id ? { ...o, available_quantity: o.available_quantity - 1 } : o
                )
            );
    
            // Add or update order in placed orders
            setPlaced((prevPlaced) => {
                const existingOrderIndex = prevPlaced.findIndex(o => o.id === order.id);
  
                if (existingOrderIndex >= 0) {
                    // Order already exists, update quantity and total price
                    const updatedOrder = {
                        ...prevPlaced[existingOrderIndex],
                        quantity: prevPlaced[existingOrderIndex].quantity + 1,
                        totalPrice: (prevPlaced[existingOrderIndex].totalPrice + order.price)
                    };
    
                    return prevPlaced.map((o, index) => 
                        index === existingOrderIndex ? updatedOrder : o
                    );
                } else {
                    // Add new order with quantity 1 and total price as item price
                    return [
                        ...prevPlaced,
                        { ...order, quantity: 1, totalPrice: order.price }
                    ];
                    
                }
            });
        }
    };
    

    return (
        <div className="menu-page-container">

    
            <section className="menu-section">
                <h2 className="section-title">Menu Items</h2>
                <div className="menu-items">
                    {orders.map((order) => (
                        <div key={order.id} className="menu-item">
                            <img
                                src={order.image_url}
                                alt={order.name} // Updated to use the item's name
                                className="menu-image"
                            />
                            <h3 className="item-name">{order.name}</h3>
                            <p className="item-price">₹{order.price.toFixed(2)}</p>
                            <p className="available-quantity">Available: {order.available_quantity} items</p> 
                            <p > type:{order.type}</p>
                          
                            <button
                                className="order-button"
                                onClick={() => handleOrderNow(order)}
                                disabled={order.available_quantity === 0} 
                            >
                                {order.available_quantity === 0 ? 'Out of Stock' : 'Order Now'}
                            </button>
                        </div>
                    ))}
                </div>
                
            </section>
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
              <button type="submit" className="confirm-button">
                Confirm Order
              </button>
              <button type="button" className="cancel-button" onClick={handlePopupClose}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

            <footer className="footer">
                <p className="footer-text">© 2024 Our Restaurant. All Rights Reserved.</p>
            </footer>
        </div>
    );
    
};

export default MenuPage;
