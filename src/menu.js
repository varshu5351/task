import React, { useState } from "react";
import "./menupage.css"; // Make sure this exists and is correct

const MenuPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [orderDetails, setOrderDetails] = useState({tableNumber: "", name: "" });
//   const [details,setDetails]=useState([])
  // Menu items data
  const menuItems = [
    {
      id: "1",
      name: "Black Coffee",
      category: "Beverages",
      sub_category: "Coffee",
      available_quantity: 10,
      price: 199.18,
      image_url: "https://www.livofy.com/health/wp-content/uploads/2020/05/black-coffee.jpg",
      type: "veg",
    },
    {
      id: "2",
      name: "Espresso",
      category: "Beverages",
      sub_category: "Coffee",
      available_quantity: 8,
      price: 245.18,
      image_url: "https://coffeehero.com.au/cdn/shop/articles/758214849ae27a07c55af11f0f0f633b_2048x2048.jpg?v=1623281348",
      type: "veg",
    },
    // Add more menu items as needed
  ];

  const handleOrderNow = (item) => {
    // debugger

    setSelectedItems((prev) => [...prev, item]);
    // console.log(selectedItems)
    // setShowPlaceOrder(true);
    setShowPopup(true)
  };

  const handlePlaceOrderClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    setOrderDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // alert(`Order placed for Table ${orderDetails.tableNumber}, Name: ${orderDetails.name}`);
    // setOrderDetails((orderDetails)=>{
        // return [...orderDetails,{orderDetails :orderDetails.tableNumber,orderDetails.name}]
        
       
    // });
    setShowPopup(false); // Close popup after order
  };

  return (
    <div className="menu-page-container">
      <h1 className="header-title">Menu</h1>

      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image_url} alt={item.name} className="menu-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-category">{item.category} - {item.sub_category}</p>
            <p className="item-type">{item.type === "veg" ? "🌱 Veg" : "🍗 Non-Veg"}</p>
            <p className="item-price">₹{item.price.toFixed(2)}</p>
            <p className="available-quantity">Available: {item.available_quantity}</p>
            <button
              className="order-button"
              onClick={() => handleOrderNow(item)}
              disabled={item.available_quantity === 0}
            >
              {item.available_quantity === 0 ? "Out of Stock" : "Order Now"}
            </button>
          </div>
        ))}
      </div>

      {showPlaceOrder && (
        <div className="place-order-container">
          <button className="place-order-button" onClick={handlePlaceOrderClick}>
            Place Order
          </button>
        </div>
      )}

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
    </div>
  );
};

export default MenuPage;
