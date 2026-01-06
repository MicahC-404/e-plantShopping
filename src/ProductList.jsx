import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch for Redux
import { addItem } from './CartSlice'; // Import the addItem action
import './ProductList.css'
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    
    // Task 1: Initialize state to track added items
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch(); // Initialize the dispatch function

    const plantsArray = [
        // ... (your existing plantsArray data remains the same)
    ];

    // Task 1: Function to handle adding items to cart
    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch Redux action
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Mark this specific plant as added
        }));
    };

    // ... (keep your existing style objects and handle functions)

    return (
        <div>
            {/* Navbar Code (Keep your existing navbar here) */}
            
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 className="category-title">{category.category}</h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img 
                                            className="product-image" 
                                            src={plant.image} 
                                            alt={plant.name} 
                                        />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-cost">{plant.cost}</div>
                                        
                                        {/* Task 1: Conditional button text/state */}
                                        <button 
                                            className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
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
