import React, { useState } from 'react'
import SwitchProps from './Switch.types'
import './Switch.scss'

const Switch = ({
  color = 'primary',
  size = 'medium',
  label,
  disabled = false,
  defaultValue = false,
  onSwitchChange,
  id,
  style,
  className,
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultValue)

  const setCheckedFn = (
    e: React.KeyboardEvent<HTMLLabelElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!disabled) {
      setChecked(prev => {
        onSwitchChange(!prev, e)
        return !prev
      })
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') setCheckedFn(e)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFn(e)
  }

  return (
    <label
      style={style}
      tabIndex={1}
      onKeyDown={onKeyDown}
      className={`
        switch-nm 
        color-${color} 
        size-${size} 
        checked-${checked} 
        disabled-${disabled}
        ${className}
      `}
      htmlFor={id}>
      <input
        tabIndex={-1}
        disabled={disabled}
        type="checkbox"
        name={id}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <div className="switch-nm-toggle">
        <div className="dot"></div>
      </div>
      {label}
    </label>
  )
}

export default Switch
