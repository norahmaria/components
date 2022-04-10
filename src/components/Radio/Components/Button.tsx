import React from 'react'

import ButtonProps from './Button.types'
import './Button.scss'

const Button = ({
  id,
  label,
  value,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={`radio-button-nm ${props.color} ${props.size}`}
      data-testid="radio-button-wrapper"
    >
      <input
        value={value}
        disabled={disabled}
        type="radio"
        id={id}
        data-testid="radip-button-input"
        name={props.name}
        onChange={props.onChange}
      />
      <label
        htmlFor={id}
        className={props.labelPlacement}
        data-testid="radio-button-label"
      >
        {label}
      </label>
    </div>
  )
}

export default Button
