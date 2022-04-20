interface SliderProps {
  /** Unique id for the slider */
  id: string
  /** Add a default value */
  defaultValue: number
  /** Min value */
  min?: number
  /** Max value */
  max?: number

  /** The color scheme of the Radio buttons */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
}

export default SliderProps
