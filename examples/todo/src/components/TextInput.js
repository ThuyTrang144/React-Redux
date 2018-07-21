import React from 'react'

const TextInput = (props) => {
  return (
    <div>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
export default TextInput
