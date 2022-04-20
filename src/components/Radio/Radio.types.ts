import React, { CSSProperties } from 'react'

interface RadioProps {
  /** A unique id used to group the Radio buttons together */
  name: string
  /** The function to call when the Radio value is changed, the first argument will give you the value of the selected Radio button, while the second one will give you the event */
  onRadioChange: (
    value: string | number | null,
    e: React.ChangeEvent<HTMLInputElement>
  ) => any

  /** Sets the Radio button group to be disabled or not */
  disabled?: boolean
  /** Sets the Radio buttons on an horizontal line if true */
  horizontal?: boolean
  /** The component expects you to use **Radio.Button** as it's children. They all need an `id`, `label` and `value`, and can be `disabled` individually. */
  children: React.ReactChild | React.ReactChild[]

  /** The size of the Radio buttons */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the Radio buttons */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  /** Where to place the Radio buttons labels */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'

  /** The default selected value */
  defaultValue?: string | number
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default RadioProps
