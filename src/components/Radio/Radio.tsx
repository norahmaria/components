import React, { useState } from 'react'
import RadioProps from './Radio.types'
import './Radio.scss'

import ExtendedButton from './Components/Private/ExtendedButton'

const Radio = ({
  name,
  label,
  onRadioChange,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'right',
  disabled = false,
  horizontal = false,
  defaultValue,
  children,
  className,
  style,
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>(
    defaultValue || null
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value)
    if (!disabled) onRadioChange(e.target.value, e)
  }

  return (
    <div
      data-testid="radio-wrapper"
      style={style}
      className={`
        radio-nm 
        disabled-${disabled} 
        horizontal-${horizontal} 
        vertical-${labelPlacement === 'bottom' || labelPlacement === 'top'}
        ${className}
      `}>
      <div className="form-label-nm">{label}</div>

      {React.Children.map(children, (child, idx) =>
        React.isValidElement(child) ? (
          <ExtendedButton
            {...child.props}
            id={`${name}-${idx}`}
            checked={child.props.value === checked}
            onChange={onChange}
            defaultChecked={child.props.value === defaultValue}
            name={name}
            size={size}
            color={color}
            labelPlacement={labelPlacement}
            disabled={disabled ? true : child.props.disabled}
          />
        ) : null
      )}
    </div>
  )
}

export default Radio
