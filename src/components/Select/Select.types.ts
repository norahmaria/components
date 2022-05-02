import React from 'react'
import Props from '../../types/Props'

export type onSelectionChangeArgs = {
  selected: (string | number)[]
  id: string
}

interface SelectProps extends Props {
  /** The select label */
  label: string
  /** The placeholder text */
  placeholder: string
  /** A unique id for the select */
  id: string

  /** The function to call when selection changes */
  onChange: ({}: onSelectionChangeArgs) => any

  /** Allow for multi select */
  multiple?: boolean
  /** Set select to be required or not, this will re-open the select whenever it is cleared */
  required?: boolean
  /** Set select to be disabled or not */
  disabled?: boolean

  /** Error or warning messages */
  status?: {
    type: 'warning' | 'error'
    message: string
  } | null

  /** The default selected value */
  defaultValue?: (string | number)[]
  /** The component expects you to use **Select.Option or Select.Group** as it's children. Select.Group needs a `title`, while Select.Option needs a `value` and a string as its child, which will be the title. */
  children?: React.ReactChild | React.ReactChild[] | React.ReactChildren
}

export default SelectProps
