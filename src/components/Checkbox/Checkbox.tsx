import React, { useEffect, useRef, useState } from 'react'
import CheckboxProps from './Checkbox.types'
import './Checkbox.scss'

import { ReactComponent as CheckMarkIcon } from '../../assets/Checkmark.svg'

// TODO: Label placement
// TODO: Unique IDs

// Consider
// -- Indeterminate

const Checkbox = ({
  disabled,
  label,
  onCheckboxChange,
  size = 'medium',
  color = 'primary',
  round = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const checkbox = useRef<HTMLInputElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  useEffect(() => {
    checkbox.current.addEventListener('keydown', e => {
      if (e.key === 'Enter') setChecked(prev => !prev)
    })
  }, [])

  useEffect(() => onCheckboxChange(checked), [checked])

  return (
    <div className={`checkbox-nm ${size} ${color}`}>
      <input
        ref={checkbox}
        disabled={disabled}
        onChange={onChange}
        id="a11y-issue-1"
        type="checkbox"
        checked={checked}
      />
      <label htmlFor="a11y-issue-1">
        <CheckMarkIcon />
        {typeof label === 'string' ? label : label.text}
      </label>
    </div>
  )
}

export default Checkbox
