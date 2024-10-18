
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MenuPage from './menupage';
import OrderHistoryPage from './historypage';
// import { CgMenuGridO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RestaurantReviewPage from './reviewpage';
import Orders from "./orders";

function App() {
  const [conform,setConform]= useState([])
  const [orders, setOrders] = useState([]);
 const [placed,setPlaced]=useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [orderDetails, setOrderDetails] = useState({tableNumber: "", name: "" });
  // const navigate = useNavigate();
    useEffect(() => {
        const fetchOrders = async () => {
          // Mock data - replace this with a real API call when backend is ready
          const mockOrders = {
            "record": [
              {
                "id": "1",
                "name": "Black Coffee",
                "category": "Beverages",
                "sub_category": "Coffee",
                "available_quantity": 10,
                "price": 199.18,
                "image_url": "https://www.livofy.com/health/wp-content/uploads/2020/05/black-coffee.jpg",
                "type": "veg",
                "totalPrice": 0 ,
              },
              {
                "id": "2",
                "name": "Espresso",
                "category": "Beverages",
                "sub_category": "Coffee",
                "available_quantity": 8,
                "price": 245.18,
                "image_url": "https://coffeehero.com.au/cdn/shop/articles/758214849ae27a07c55af11f0f0f633b_2048x2048.jpg?v=1623281348",
                "type": "veg",
                "totalPrice": 0 ,
              },
              { 
                "totalPrice": 0 ,
                "id": "3",
                "name": "Double Espresso",
                "category": "Beverages",
                "sub_category": "Coffee",
                "available_quantity": 6,
                "price": 327.18,
                "image_url": "https://cdn.o2vend.com/840e087a-a6ca-44e0-b5ca-ff41d3115911/9faf8b13-7e93-46ef-9826-26ae19345226.jpg",
                "type": "veg"
              },
              {
                "totalPrice": 0 ,
                "id": "4",
                "name": "Latte",
                "category": "Beverages",
                "sub_category": "Coffee",
                "available_quantity": 4,
                "price": 327.18,
                "image_url": "https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "5",
                "name": "Paneer Pizza",
                "category": "Food",
                "sub_category": "Pizza",
                "available_quantity": 10,
                "price": 737.18,
                "image_url": "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "6",
                "name": "Corn Pizza",
                "category": "Food",
                "sub_category": "Pizza",
                "available_quantity": 8,
                "price": 573.18,
                "image_url": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "7",
                "name": "Vegetable Pizza",
                "category": "Food",
                "sub_category": "Pizza",
                "available_quantity": 6,
                "price": 819.18,
                "image_url": "https://foods.qmanja.com/MenuImages/Menu5114-Mix-veg-pizza.jpg.png",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "8",
                "name": "Chicken BBQ Pizza",
                "category": "Food",
                "sub_category": "Pizza",
                "available_quantity": 2,
                "price": 819.18,
                "image_url": "https://i0.wp.com/www.slapyodaddybbq.com/wp-content/uploads/BBQChickenPizza-foodgawker.jpg?fit=600%2C600&ssl=1",
                "type": "non-veg"
              },
              {"totalPrice": 0 ,
                "id": "9",
                "name": "Chicken Tandoori Pizza",
                "category": "Food",
                "sub_category": "Pizza",
                "available_quantity": 3,
                "price": 901.18,
                "image_url": "https://tastytango.blog/wp-content/uploads/2023/07/koolgurl._A_close-up_high_quality_photo_of_a_Tandoori_Fusion_De_2028d66f-ef2d-46ba-8ebd-41491e80ba4b.jpg",
                "type": "non-veg"
              },
              {"totalPrice": 0 ,
                "id": "10",
                "name": "Penne Alfredo",
                "category": "Food",
                "sub_category": "Pasta",
                "available_quantity": 8,
                "price": 737.18,
                "image_url": "https://www.spoonfulofflavor.com/wp-content/uploads/2023/12/alfredo-penne-pasta-500x375.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "11",
                "name": "Pasta alla Norma",
                "category": "Food",
                "sub_category": "Pasta",
                "available_quantity": 6,
                "price": 819.18,
                "image_url": "https://www.themediterraneandish.com/wp-content/uploads/2020/12/pasta-alla-norma-recipe-6.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "12",
                "name": "Pasta e fagioli",
                "category": "Food",
                "sub_category": "Pasta",
                "available_quantity": 1,
                "price": 573.18,
                "image_url": "https://www.saveur.com/uploads/2019/04/22/G3TIHE7ANJTO5EQGLDVLN4WIQA-768x1024.jpg?auto=webp&optimize=high&quality=70&width=1440",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "13",
                "name": "Chicken Alfredo",
                "category": "Food",
                "sub_category": "Pasta",
                "available_quantity": 9,
                "price": 901.18,
                "image_url": "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
                "type": "non-veg"
              },
              {"totalPrice": 0 ,
                "id": "14",
                "name": "Chicken Pesto Pasta",
                "category": "Food",
                "sub_category": "Pasta",
                "available_quantity": 10,
                "price": 819.18,
                "image_url": "https://therecipecritic.com/wp-content/uploads/2023/02/chickenpestopasta-1.jpg",
                "type": "non-veg"
              },
              {"totalPrice": 0 ,
                "id": "15",
                "name": "Chocolate Lava Cake",
                "category": "Food",
                "sub_category": "Dessert",
                "available_quantity": 10,
                "price": 573.18,
                "image_url": "https://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972-1.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "16",
                "name": "Tiramisu",
                "category": "Food",
                "sub_category": "Dessert",
                "available_quantity": 8,
                "price": 819.18,
                "image_url": "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "17",
                "name": "Cheesecake",
                "category": "Food",
                "sub_category": "Dessert",
                "available_quantity": 3,
                "price": 901.18,
                "image_url": "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "18",
                "name": "Apple Pie",
                "category": "Food",
                "sub_category": "Dessert",
                "available_quantity": 8,
                "price": 819.18,
                "image_url": "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "19",
                "name": "Chocolate Mousse",
                "category": "Food",
                "sub_category": "Dessert",
                "available_quantity": 4,
                "price": 901.18,
                "image_url": "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "20",
                "name": "Chocolate Milkshake",
                "category": "Food",
                "sub_category": "Milkshake",
                "available_quantity": 2,
                "price": 573.18,
                "image_url": "https://www.orchidsandsweettea.com/wp-content/uploads/2020/01/Peanut-Butter-Milkshake-4-of-4.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "21",
                "name": "Vanilla Milkshake",
                "category": "Food",
                "sub_category": "Milkshake",
                "available_quantity": 3,
                "price": 501.18,
                "image_url": "https://pintsizedbaker.com/wp-content/uploads/2015/12/Vanilla-Shake-4.jpg.webp",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "22",
                "name": "Strawberry Milkshake",
                "category": "Food",
                "sub_category": "Milkshake",
                "available_quantity": 8,
                "price": 573.18,
                "image_url": "https://www.justsotasty.com/wp-content/uploads/2018/05/Strawberry-Milkshake.jpg",
                "type": "veg"
              },
              {"totalPrice": 0 ,
                "id": "23",
                "name": "Oreo Milkshake",
                "category": "Food",
                "sub_category": "Milkshake",
                "available_quantity": 6,
                "price": 901.18,
                "image_url": "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
                "type": "veg"
              }
            ],
          
          }
            
        
          setOrders(mockOrders.record);
        };
    
        fetchOrders();
      }, []);

      const handleInputChange = (e) => {
        setOrderDetails((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    // const navigate = useNavigate();
      const handleOrderSubmit = (e) => {
        e.preventDefault();
       
        setShowPopup(false);
      
        // navigate("/orders")

      };
      const handlePopupClose = () => {
        setShowPopup(false);
      };
      useEffect(()=>{ 
        if(conform.length > 0){
        window.localStorage.setItem("orderlist",JSON.stringify(conform))}
        
      },[conform])
  return( 
    <>
    <BrowserRouter>
    <header className="header">
                <h1 className="header-title">Our Delicious Menu</h1>
                <p className="header-subtitle">Handpicked dishes for you to enjoy!</p>
              <p><Link   style={{textDecoration:"none",color:"white",position:"absolute",top:"73px",left:"800px",display:"flex",flexDirection:"column"}} to="/" >Home</Link></p>
                <p style={{position:"absolute",top:"58px",left:"850px",display:"flex",flexDirection:"column"}}>   
                <Link   style={{textDecoration:"none",color:"white"}} to="/orders" >Orders</Link></p>
                <p style={{position:"absolute",top:"58px",left:"910px",display:"flex",flexDirection:"column"}}>   
                <Link   style={{textDecoration:"none",color:"white"}} to="/reviewspage" >Customers Review</Link></p>
                <h2 style={{position:"absolute",top:"80px",left:"960px",display:"flex",flexDirection:"column"}}>   
                <Link   style={{textDecoration:"none",color:"white"}} to="/ordernow" >Order Now</Link></h2>
            </header>
  
   <Routes>
   
 
    <Route path="/" element={<MenuPage orders={orders} setOrders={setOrders} setPlaced={setPlaced} />}/>
    <Route path="/orders" element={<OrderHistoryPage  conform={conform}/>}/>
    <Route path="/reviewspage" element={<RestaurantReviewPage/>}/>
    <Route path="/ordernow" element={<Orders placed={placed}  setConform={setConform}  setShowPopup={ setShowPopup} handleInputChange={handleInputChange} handleOrderSubmit={handleOrderSubmit}  showPopup={showPopup}  orderDetails={orderDetails} handlePopupClose={handlePopupClose}/>}/>
   </Routes>

    </BrowserRouter>
    </>

)
}

export default App;


