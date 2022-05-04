import React, { useEffect, useState } from 'react'
import SliderProps from './Slider.types'

import getPercentage from '../../utils/getPercentage'
import './Slider.scss'

const Slider = ({
  value,
  max = 100,
  min = 0,
  id,
  label,
  vertical = false,
  color = 'primary',
  size = 'medium',
  className,
  style,
  disabled = false,
  onChange,
  step = 1,
  prefix,
  suffix,
}: SliderProps) => {
  const [percentage, setPercentage] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)

  const isGray = color === 'neutral' || disabled
  const gradientColor = isGray ? '#606078' : `var(--${color}700)`

  useEffect(() => {
    setPercentage(getPercentage(value, max, min))
  }, [value])

  return (
    <div
      data-testid="slider-wrapper"
      className={`
        slider-nm 
        size-${size}
        disabled-${disabled}
        vertical-${vertical}
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
        className={`slider-nm__range color-${color}`}
        style={{
          ...style,
          backgroundImage: `linear-gradient(${
            vertical ? '0deg' : '90deg'
          }, ${gradientColor} ${
            vertical ? percentage + 3 : percentage
          }%, #E7E9EB ${percentage}%)`,
        }}>
        <span
          className="slider-nm__dot"
          style={
            vertical
              ? { bottom: `${percentage > 90 ? percentage - 10 : percentage}%` }
              : { marginLeft: `${percentage}%` }
          }>
          {showTooltip && (
            <div className={`tooltip-nm ${vertical ? 'right' : ''}`}>
              {prefix && prefix}
              {value}
              {suffix && suffix}
            </div>
          )}
        </span>
      </div>
    </div>
  )
}

export default Slider
