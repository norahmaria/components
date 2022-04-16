import React, { useState } from 'react'
import SwitchProps from './Switch.types'
import './Switch.scss'

const Switch = ({
  color = 'primary',
  size = 'medium',
  label,
  disabled,
  onSwitchChange,
}: SwitchProps) => {
  const [checked, setChecked] = useState(false)

  const onClick = () => {
    setChecked(prev => {
      onSwitchChange(!prev)
      return !prev
    })
  }

  return (
    <label
      onClick={onClick}
      tabIndex={1}
      className={`switch-nm color-${color} size-${size} checked-${checked} disabled-${disabled}`}
      htmlFor="switch-nm">
      <input
        tabIndex={-1}
        disabled={disabled}
        type="checkbox"
        name="toggle"
        id="toggle"
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