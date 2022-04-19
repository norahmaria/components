import React, { useState } from 'react'
import SwitchProps from './Switch.types'
import './Switch.scss'

const Switch = ({
  color = 'primary',
  size = 'medium',
  label,
  disabled,
  defaultValue,
  onSwitchChange,
  id,
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultValue || false)

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
      tabIndex={1}
      onKeyDown={onKeyDown}
      className={`switch-nm color-${color} size-${size} checked-${checked} disabled-${disabled}`}
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
