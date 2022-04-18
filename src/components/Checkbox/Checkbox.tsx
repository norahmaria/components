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
  size = 'medium',
  color = 'primary',
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const checkbox = useRef<HTMLInputElement>(null)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(target.checked)
    if (!disabled) onCheckboxChange(target.checked)
  }

  useEffect(() => {
    checkbox.current.addEventListener('keydown', e => {
      if (e.key === 'Enter') setChecked(prev => !prev)
    })
  }, [])

  return (
    <div
      className={`checkbox-nm size-${size} color-${color}`}
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
