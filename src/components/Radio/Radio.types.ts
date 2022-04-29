import React from 'react'
import Props from '../../types/Props'

interface RadioProps extends Props {
  /** The label for the radio group */
  label: string
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

  /** Where to place the Radio buttons labels */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'

  /** The default selected value */
  defaultValue?: string | number
}

export default RadioProps
