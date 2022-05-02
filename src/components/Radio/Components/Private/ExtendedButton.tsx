import React from 'react'

import ExtendedButtonProps from './ExtendedButton.types'

const Child = ({
  onChange,
  id,
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
      className={`
        radio-nm__button
        color-${color} 
        size-${size}
      `}>
      <input
        data-testid={`radio-button-input-${id}`}
        type="radio"
        value={props.value}
        disabled={disabled}
        onChange={onChange}
        name={name}
        id={id}
      />

      <label
        data-testid={`radio-button-label-${id}`}
        htmlFor={id}
        className={labelPlacement}>
        {props.label}
      </label>
    </div>
  )
}

export default Child
