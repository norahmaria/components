import React, { CSSProperties } from 'react'

interface SelectProps {
  /** The select label */
  label: string
  /** The placeholder text */
  placeholder: string
  /** The function to call when selection changes, the parameter will give you the value of the selected item(s) */
  onSelectionChange: (selected: (string | number)[]) => any

  /** Allow for multi select */
  multiple?: boolean
  /** Set select to be required or not, this will re-open the select whenever it is cleared */
  required?: boolean
  /** Set select to be disabled or not */
  disabled?: boolean

  /** The size of the select */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the Select */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  /** Error or warning messages */
  status?: {
    type: 'warning' | 'error'
    message: string
  } | null

  /** The default selected value */
  defaultValue?: (string | number)[]
  /** The component expects you to use **Select.Option or Select.Group** as it's children. Select.Group needs a `title`, while Select.Option needs a `value` and a string as its child, which will be the title. */
  children?: React.ReactChild | React.ReactChild[] | React.ReactChildren
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default SelectProps
