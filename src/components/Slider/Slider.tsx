import React, { useEffect, useState } from 'react'
import SliderProps from './Slider.types'

import './Slider.scss'

const Slider = ({
  defaultValue = 20,
  max = 100,
  min = 0,
  id,
  label,
  color = 'primary',
  size = 'medium',
  className,
  style,
  disabled = false,
  onSliderChange,
  step = 1,
}: SliderProps) => {
  const [percentage, setPercentage] = useState(0)
  const [value, setValue] = useState(defaultValue)
  const [showTooltip, setShowTooltip] = useState(false)

  const gradientColor = color === 'neutral' || disabled ? '#606078' : `var(--${color}700)`

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value))
    if (!disabled) onSliderChange(parseFloat(e.target.value), e)
  }

  useEffect(() => {
    setPercentage(getPercentage(value, max, min))
  }, [value])

  return (
    <div
      data-testid="slider-wrapper"
      className={`
      slider 
      size-${size}
      disabled-${disabled}
      ${className}
    `}>
      <label htmlFor={id} className={`form-label-nm disabled-${disabled}`}>
        {label}
      </label>
      <input
        data-testid="slider-input"
        disabled={disabled}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        id={id}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        type="range"
      />
      <div
        data-testid="slider-placebo"
        className={`range color-${color}`}
        style={{
          ...style,
          backgroundImage: `linear-gradient(90deg, ${gradientColor} ${percentage}%, #E7E9EB ${percentage}%)`,
        }}>
        <span
          className="dot"
          style={{
            marginLeft: `${percentage}%`,
          }}>
          {showTooltip && <div className="tooltip">{value}</div>}
        </span>
      </div>
    </div>
  )
}

const getPercentage = (number: number, max: number, min: number) => {
  const range = max - min
  const positiveValue = number - min

  return (positiveValue / range) * 100
  console.table([{ range, number, positiveValue }])
}

export default Slider
