import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        // Add other plants...
      ]
    },
    // Add other categories...
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="luxury">
          <a href="/" onClick={handleHomeClick}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div className="navbar-right">
          <button onClick={handleCartClick}>Cart ({cartItems.length})</button>
        </div>
      </div>

      {/* Main content */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map(category => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              <div className="category-grid">
                {category.plants.map(plant => (
                  <div className="plant-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
