import React from 'react';
import '../assets/css/Product.css';

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>Product information</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
                <p className="product__rating">
                    <p>star</p>
                    <p>star</p>
                    <p>star</p>
                </p>
            </div>
            <img src="" alt="Product"/>
		</div>
	);
}

export default Product;
