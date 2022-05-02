import React from 'react'
import SwitchProps from './Switch.types'
import './Switch.scss'

const Switch = ({
  color = 'primary',
  size = 'medium',
  label,
  disabled = false,
  value,
  onSwitchChange,
  id,
  style,
  className,
}: SwitchProps) => {
  return (
    <label
      data-testid="switch-wrapper"
      style={style}
      htmlFor={id}
      className={`
        switch-nm 
        color-${color} 
        size-${size} 
        checked-${value} 
        disabled-${disabled}
        ${className}
      `}>
      <input
        data-testid="switch-input"
        disabled={disabled}
        type="checkbox"
        name={id}
        id={id}
        onChange={onSwitchChange}
        checked={value}
      />
      <div className="switch-nm__toggle">
        <div className="dot"></div>
      </div>
      {label}
    </label>
  )
}

export default Switch
