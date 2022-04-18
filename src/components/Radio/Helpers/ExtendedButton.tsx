import React from 'react'

import ExtendedButtonProps from './ExtendedButton.types'

const Child = ({
  onChange,
  name,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'right',

  disabled,
  ...props
}: ExtendedButtonProps) => {
  return (
    <div
      data-testid="radio-button-wrapper"
      className={`radio-button-nm color-${color} size-${size}`}>
      <input
        data-testid={`radio-button-input-${props.id}`}
        id={props.id}
        value={props.value}
        disabled={disabled}
        type="radio"
        onChange={onChange}
        name={name}
      />

      <label
        data-testid={`radio-button-label-${props.id}`}
        htmlFor={props.id}
        className={labelPlacement}>
        {props.label}
      </label>
    </div>
  )
}

export default Child
