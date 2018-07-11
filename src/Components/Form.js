import React, { Component } from 'react';
import Button from './Button.js'

const Form = (props) => {
  return (
    <div>
      <p>Form</p>
      <Button nameBtn={'Add'} onClick={props.goBack}></Button>
      <Button nameBtn={'Back'} onClick={props.goBack}></Button>
    </div>
  )
}

export default Form
