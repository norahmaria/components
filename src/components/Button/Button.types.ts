import { CSSProperties } from 'react'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  variant?: 'default' | 'secondary' | 'outlined'
  round?: boolean
  leftIcon?: JSX.Element | string
  rightIcon?: JSX.Element | string
  isLoading?: boolean
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
  children?: string

  className?: string
  style?: CSSProperties
}

export default ButtonProps
