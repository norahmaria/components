import Props from '../../types/Props'

interface ButtonProps extends Props {
  /** The function to call when the button is clicked, the argument will give you the event. */
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => any

  /** Let the button take up the space it has around it */
  fullWidth?: boolean

  /** The variant of the button */
  variant?: 'default' | 'secondary' | 'outlined'
  /** Use rounded corners on the button or not */
  round?: boolean
  /** Icon on the left */
  leftIcon?: JSX.Element | string
  /** Icon on the right */
  rightIcon?: JSX.Element | string

  /** Is button loading or not */
  isLoading?: boolean
  /** Whether to disable the button or not */
  disabled?: boolean

  /** The type of the button */
  type?: 'button' | 'reset' | 'submit'
  /** The content inside the button */
  children?: string
}

export default ButtonProps
