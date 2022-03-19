interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  variant?: 'default' | 'secondary' | 'outlined'
  round?: boolean
  leftIcon?: JSX.Element | string
  rightIcon?: JSX.Element | string
  isLoading?: boolean
}

export default ButtonProps
