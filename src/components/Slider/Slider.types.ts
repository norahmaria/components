import React from 'react'
import Props from '../../types/Props'

interface SliderProps extends Props {
  /** Unique id for the slider */
  id: string
  /** The label for the slider */
  label: string
  /** Add a default value */
  defaultValue?: number
  /** Min value */
  min?: number
  /** Max value */
  max?: number
  /** How many steps should be taken at once */
  step?: number

  /** The function to call when the value is changed, the first argument will give you the value, while the second will give the event. */
  onSliderChange: (
    value: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => any

  /** Set slider to be disabled */
  disabled?: boolean

  /** Make the slider vertical */
  vertical?: boolean

  /** Add text after the value in tooltip */
  suffix?: string
  /** Add text before the value in tooltip */
  prefix?: string
}

export default SliderProps
