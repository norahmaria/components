import Props from '../../types/Props'

interface CheckboxProps extends Props {
  /** The unique id to use for the checkbox and for the label for attribute */
  id: string
  /** The checkbox label */
  label: string
  /** The function to call when checkbox is changed. */
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => any

  /** Sets the checkbox to be disabled or not */
  disabled?: boolean

  /** Where to place the checkbox label */
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'

  /** 'The value of the checkbox */
  value: boolean
}

export default CheckboxProps
