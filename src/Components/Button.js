import React, { Component } from 'react';

const Button = (props) => {
  return (
    <button type="button" onClick={() => props.onClick(props.name)}>
    {props.name}
    </button>
  )
}
export default Button
