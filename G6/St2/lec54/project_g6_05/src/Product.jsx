import React from 'react'
import './Product.css'

const Product = (props) => {
  return (
    <div>
    <article className='product'>
        <h1>name:{props.name}</h1>
        <img src={props.imgUrl} alt="" />
        <p>price:{props.price}</p>
    </article>
    </div>
  )
}

export default Product
