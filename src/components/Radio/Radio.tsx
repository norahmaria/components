import React from 'react'
import RadioProps from './Radio.types'
import './Radio.scss'

import ExtendedButton from './Components/Private/ExtendedButton'

const Radio = ({
  name,
  label,
  onChange,
  size = 'medium',
  color = 'primary',
  labelPlacement = 'right',
  disabled = false,
  horizontal = false,
  value,
  children,
  className,
  style,
}: RadioProps) => {
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
            checked={child.props.value === value}
            onChange={onChange}
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
