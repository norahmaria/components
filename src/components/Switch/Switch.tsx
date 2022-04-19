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
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultValue || false)

  const setCheckedFn = (
    e:
      | React.MouseEvent<HTMLLabelElement, MouseEvent>
      | React.KeyboardEvent<HTMLLabelElement>
  ) => {
    if (!disabled) {
      setChecked(prev => {
        onSwitchChange(!prev, e)
        return !prev
      })
    }
  }

  const onClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    setCheckedFn(e)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') setCheckedFn(e)
  }

  return (
    <label
      onClick={e => onClick}
      tabIndex={1}
      onKeyDown={onKeyDown}
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
