import React from 'react';
import ProductCard from './product-card'
const ProductRow = (props) => {
  return (
    <div className="row wow fadeIn">
    	{/*Card*/}
      <ProductCard></ProductCard>
      {/*Card*/}
      <ProductCard></ProductCard>
      {/*Card*/}
      <ProductCard></ProductCard>
      {/*Card*/}
	    <ProductCard></ProductCard>
	    {/*Card*/}
	    <ProductCard></ProductCard>
      {/*Card*/}
      <ProductCard></ProductCard>
      {/*Card*/}
      <ProductCard></ProductCard>
      {/*Card*/}
	    <ProductCard></ProductCard>
    </div>
  )
}

export default ProductRow;