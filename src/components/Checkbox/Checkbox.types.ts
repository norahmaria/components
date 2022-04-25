import Props from '../../types/Props'

interface CheckboxProps extends Props {
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

  /** 'The default value of the checkbox */
  defaultValue?: boolean
}

export default CheckboxProps
