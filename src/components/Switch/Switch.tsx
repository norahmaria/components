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
    e:
      | React.KeyboardEvent<HTMLLabelElement>
      | React.ChangeEvent<HTMLInputElement>
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
      data-testid="switch-wrapper"
      style={style}
      tabIndex={0}
      onKeyDown={onKeyDown}
      htmlFor={id}
      className={`
        switch-nm 
        color-${color} 
        size-${size} 
        checked-${checked} 
        disabled-${disabled}
        ${className}
      `}>
      <input
        data-testid="switch-input"
        tabIndex={-1}
        disabled={disabled}
        type="checkbox"
        name={id}
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <div className="switch-nm__toggle">
        <div className="dot"></div>
      </div>
      {label}
    </label>
  )
}

export default Switch
