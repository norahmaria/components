import ButtonProps from '../Components/Button.types'

interface ExtendedButtonProps extends ButtonProps {
  labelPlacement?: 'top' | 'bottom' | 'right' | 'left'
  name: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default ExtendedButtonProps
