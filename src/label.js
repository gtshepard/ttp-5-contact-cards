import React from 'react'
const Label = (props) => {

  return (
    <div>
      <p className="Label"> <strong>{props.name}</strong>: {props.text}</p>
    </div>
  )
}
export default Label
