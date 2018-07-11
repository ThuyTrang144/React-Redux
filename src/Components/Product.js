import React, { Component } from 'react';
import Rating from './Rating';

const Product = (props) => {
  return (
    props.products.map(p => (
      <div key={p.id}>
        <h3>{p.name}</h3>
        <p>{p.price}</p>
        <Rating  rating = {p.rating} />
        <br/>
      </div>
    ))
  )
}

export default Product
