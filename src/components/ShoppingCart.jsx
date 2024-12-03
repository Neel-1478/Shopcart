import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  // Sample product data with images
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 699,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZ7bsRaWHA9BmrqLFBkdbK6OczzmbIncpzA&s",
    },
    {
      id: 2,
      name: "Headphones",
      price: 199,
      image: "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?cs=srgb&dl=pexels-alexazabache-3907507.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Laptop",
      price: 1299,
      image: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?cs=srgb&dl=pexels-alexazabache-3766111.jpg&fm=jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      
      {/* Product Listing */}
      <div className="product-list">
        <h2>Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <h3>Total Price: ${totalPrice}</h3>
              <h3>Total Items: {cart.length}</h3>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
