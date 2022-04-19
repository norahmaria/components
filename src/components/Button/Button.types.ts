interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  variant?: 'default' | 'secondary' | 'outlined'
  round?: boolean
  leftIcon?: JSX.Element | string
  rightIcon?: JSX.Element | string
  isLoading?: boolean
  children?: string
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export default ButtonProps
