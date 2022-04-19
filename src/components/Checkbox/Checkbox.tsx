import React, { useEffect, useRef, useState } from 'react'
import CheckboxProps from './Checkbox.types'
import './Checkbox.scss'

import { ReactComponent as CheckMarkIcon } from '../../assets/Checkmark.svg'

// Consider
// -- Indeterminate

const Checkbox = ({
  id,
  disabled = false,
  label,
  labelPlacement = 'right',
  onCheckboxChange,
  defaultValue,
  size = 'medium',
  color = 'primary',
  className,
  style,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultValue || false)
  const checkbox = useRef<HTMLInputElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (!disabled) onCheckboxChange(e.target.checked, e)
  }

  useEffect(() => {
    checkbox.current.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        setChecked(prev => {
          if (!disabled) onCheckboxChange(!prev, e)
          return !prev
        })
      }
    })
  }, [])

  return (
    <div
      style={style}
      className={`
        checkbox-nm 
        size-${size} 
        color-${color} 
        disabled-${disabled}
        ${className}
      `}
      data-testid="checkbox-wrapper">
      <input
        ref={checkbox}
        disabled={disabled}
        onChange={onChange}
        id={id}
        type="checkbox"
        checked={checked}
        data-testid="checkbox-input"
      />
      <label htmlFor={id} className={labelPlacement} data-testid="checkbox-label">
        <CheckMarkIcon />
        {label}
      </label>
    </div>
  )
}

export default Checkbox
