import ButtonProps from '../Button.types'

interface ExtendedButtonProps extends ButtonProps {
  labelPlacement?: 'top' | 'bottom' | 'right' | 'left'
  name: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
  id: string
  defaultChecked: boolean
}

export default ExtendedButtonProps
