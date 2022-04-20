import React, { useEffect, useRef, useState } from 'react'
import SliderProps from './Slider.types'

import './Slider.scss'

const Slider = ({
  defaultValue = 20,
  max = 100,
  min = 0,
  id,
  color = 'primary',
}: SliderProps) => {
  const [percentage, setPercentage] = useState(0)
  const [value, setValue] = useState(defaultValue)
  const [hover, setHover] = useState(false)

  const input = useRef<HTMLInputElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value))
  }

  useEffect(() => {
    setPercentage(getPercentage(value, max, min))
  }, [value])

  const forceInputActive = () => {
    input.current?.focus()
  }

  return (
    <div className="slider">
      <label htmlFor={id} className="form-label-nm">
        Slider
      </label>
      <input
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        ref={input}
        id={id}
        min={min}
        max={max}
        onChange={onChange}
        type="range"
      />
      <div
        className="range"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--${color}700) ${percentage}%, #E7E9EB ${percentage}%)`,
        }}>
        <span
          onClick={forceInputActive}
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
