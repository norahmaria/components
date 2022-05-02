import React from 'react'
import Props from '../../types/Props'

interface SliderProps extends Props {
  /** Unique id for the slider */
  id: string
  /** The label for the slider */
  label: string
  /** The value of the slider */
  value: number
  /** Min value */
  min?: number
  /** Max value */
  max?: number
  /** How many steps should be taken at once */
  step?: number

  /** The function to call when the value is changed */
  onSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => any

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
