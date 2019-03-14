import React from 'react';

const Price = (props) => {
		const product = props.product
		console.log("product: ", product)
		console.log("props: ", props)
		let price = (<h4 className="font-weight-bold red-text">
      <strong>{product.price}$</strong>
    </h4>)
		if (product.discounted_price != "0.00") {
			price = (
		    <h4 className = "font-weight-bold blue-text" >
					<strong>{product.discounted_price}$</strong>
					<span><small className="font-weight-bold red-text">
		      <strong><strike>{product.price}$</strike></strong>
		    </small></span>
				</h4>)
			}
			return (
				<div>{price}</div>
			)
		}

		export default Price;
