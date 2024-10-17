
import React from 'react';
import './menupage.css'; // Importing the CSS
// import { BsPhoneVibrate } from 'react-icons/bs';

const MenuPage = ({orders,setOrders,setPlaced}) => {
  const handleOrderNow = (order) => {
   
    if (order.available_quantity > 0) {
        // Decrease available quantity
        setOrders((prevOrders) =>
            prevOrders.map((o) =>
                o.id === order.id ? { ...o, available_quantity: o.available_quantity - 1 } : o
            )
        );
        // Add order to placed orders
        setPlaced((state)=>{
        return [...state,order]
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
    
            <footer className="footer">
                <p className="footer-text">© 2024 Our Restaurant. All Rights Reserved.</p>
            </footer>
        </div>
    );
    
};

export default MenuPage;
