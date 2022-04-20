import { CSSProperties } from 'react'

interface CheckboxProps {
  /** The unique id to use for the checkbox and for the label for attribute */
  id: string
  /** The checkbox label */
  label: string
  /** The function to call when checkbox is changed, the first argument will give you the value of the checkbox, while the second argument will give you the event, either the onChange for the input, or the keydown event (for checking with enter). */
  onCheckboxChange: (
    checked: boolean,
    e: React.ChangeEvent<HTMLInputElement> | KeyboardEvent
  ) => any

  /** Sets the checkbox to be disabled or not */
  disabled?: boolean

  /** Where to place the checkbox label */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  /** The size of the checkbox and label */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the checkbox */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  /** 'The default value of the checkbox */
  defaultValue?: boolean
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default CheckboxProps
