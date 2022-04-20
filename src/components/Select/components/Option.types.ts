interface OptionProps {
  /** The value of the option */

  value: string | number

  /** The icon to the left */
  leftIcon?: JSX.Element | string
  /** The icon to the right */
  rightIcon?: JSX.Element | string

  /** Sets the option to be disabled or not */
  disabled?: boolean
  /** The children expects a string which is the label for the option */
  children: string
}

export default OptionProps
