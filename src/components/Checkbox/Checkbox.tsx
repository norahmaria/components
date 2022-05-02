import React from 'react'
import CheckboxProps from './Checkbox.types'
import './Checkbox.scss'

import { ReactComponent as CheckMarkIcon } from '../../assets/Checkmark.svg'

const Checkbox = ({
  id,
  disabled = false,
  label,
  labelPlacement = 'right',
  onChange,
  value,
  size = 'medium',
  color = 'primary',
  className,
  style,
}: CheckboxProps) => {
  return (
    <div
      data-testid="checkbox-wrapper"
      style={style}
      className={`
        checkbox-nm 
        size-${size} 
        color-${color} 
        ${className}
      `}>
      <input
        data-testid="checkbox-input"
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={value}
        id={id}
      />

      <label
        data-testid="checkbox-label"
        htmlFor={id}
        className={labelPlacement}>
        <CheckMarkIcon />

        {label}
      </label>
    </div>
  )
}

export default Checkbox
