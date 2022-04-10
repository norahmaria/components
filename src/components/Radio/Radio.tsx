import React, { useState, useEffect } from 'react'
import RadioProps from './Radio.types'
import './Radio.scss'

import Children from './helpers/Children'

const Radio = ({
  name,
  onRadioChange,
  size,
  color,
  labelPlacement,
  disabled = false,
  horizontal = false,
  ...props
}: RadioProps) => {
  const [checked, setChecked] = useState<string | number>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value)
  }

  useEffect(() => {
    onRadioChange(checked)
    console.log('checked', checked)
  }, [checked])

  return (
    <div
      className={`radio-nm disabled-${disabled} horizontal-${horizontal} vertical-label-${
        labelPlacement === 'bottom' || labelPlacement === 'top'
      }`}
      data-testid="radio-wrapper"
    >
      <div className="title">{name}</div>
      <Children
        children={props.children}
        size={size}
        disabled={disabled}
        color={color}
        name={name}
        onChange={onChange}
        labelPlacement={labelPlacement}
      />
    </div>
  )
}

export default Radio
