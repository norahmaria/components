import { CSSProperties } from 'react'

interface ButtonProps {
  /** The function to call when the button is clicked, the argument will give you the event. */
  onButtonClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => any

  /** The size of the button */
  size?: 'small' | 'medium' | 'large'
  /** Let the button take up the space it has around it */
  fullWidth?: boolean
  /** The color scheme of the button */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
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
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default ButtonProps
