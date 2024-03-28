import React from 'react'
import './Product.css';

const Product = (props) => {
  return (
    <div  style={{textAlign:'center'}}>
    <article className='product'>
      <h1>name:{props.name}</h1>
     <img src={props.imgUrl} alt="" />
      <h4>Product Price:{props.price}</h4>
    </article>
  
  </div>
  )
}

export default Product
