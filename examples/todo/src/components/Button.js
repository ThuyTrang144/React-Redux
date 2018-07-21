import React from 'react';

const Button = (props) => {
  return (
    <button type="button" onClick={() => props.onClick(props.nameBtn)}>
    {props.nameBtn}
    </button>
  )
}
export default Button
