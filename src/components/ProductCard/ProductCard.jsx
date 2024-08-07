import React from 'react'
import './ProductCard.css'


const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={image} alt={name} className="product-image" />
            </div>

            <div className="product-name">
                <p>{name}</p>
                <p>$ {price}</p>
            </div>

        </div>
    );
}

export default ProductCard