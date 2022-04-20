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
  className,
  style,
  onSliderChange,
}: SliderProps) => {
  const [percentage, setPercentage] = useState(0)
  const [value, setValue] = useState(defaultValue)
  const [hover, setHover] = useState(false)

  const gradientColor = color === 'neutral' ? '#606078' : `var(--${color}700)`

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value))
    onSliderChange(parseFloat(e.target.value), e)
  }

  useEffect(() => {
    setPercentage(getPercentage(value, max, min))
  }, [value])

  return (
    <div className={`slider ${className}`}>
      <label htmlFor={id} className="form-label-nm">
        {label}
      </label>
      <input
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        id={id}
        min={min}
        max={max}
        onChange={onChange}
        type="range"
      />
      <div
        className="range"
        style={{
          ...style,
          backgroundImage: `linear-gradient(90deg, ${gradientColor} ${percentage}%, #E7E9EB ${percentage}%)`,
        }}>
        <span
          className="dot"
          style={{
            marginLeft: `${percentage}%`,
          }}>
          {hover && <div className="tooltip">{value}</div>}
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
