import React, { useState } from 'react'
import RadioProps from './Radio.types'
import './Radio.scss'

import ExtendedButton from './Helpers/ExtendedButton'

const Radio = ({
  name,
  onRadioChange,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'right',
  disabled = false,
  horizontal = false,
  defaultValue,
  children,
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>(defaultValue || null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value)
    if (!disabled) onRadioChange(e.target.value, e)
  }

  return (
    <div
      data-testid="radio-wrapper"
      className={`
        radio-nm disabled-${disabled} 
        horizontal-${horizontal} 
        vertical-label-${labelPlacement === 'bottom' || labelPlacement === 'top'}
      `}>
      <div className="form-label-nm">{name}</div>

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
