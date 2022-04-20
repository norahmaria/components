import React, { useEffect, useRef, useState } from 'react'
import SliderProps from './Slider.types'

import './Slider.scss'

const Slider = ({
  defaultValue,
  max = 100,
  min = 0,
  id,
  color = 'primary',
}: SliderProps) => {
  const [percentage, setPercentage] = useState(0)
  const [dotLeftPosition, setDotLeftPosition] = useState(0)
  const [value, setValue] = useState(defaultValue || 20)
  const ref = useRef<HTMLDivElement>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value))
  }

  useEffect(() => {
    setPercentage(getPercentage(value, max, min))

    setDotLeftPosition(() => {
      const range = ref.current?.clientWidth
      return (value / range) * 100
    })
  }, [value])

  return (
    <div className="slider" ref={ref}>
      <label htmlFor={id} className="form-label-nm">
        Slider
      </label>
      <input id={id} min={min} max={max} onChange={onChange} type="range" />
      <div
        className="range"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--${color}700) ${percentage}%, #E7E9EB ${percentage}%)`,
        }}>
        <span
          className="dot"
          style={{
            marginLeft: `${percentage > 92 ? 92 : percentage}%`,
          }}></span>
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
