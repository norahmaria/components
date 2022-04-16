interface SwitchProps {
  label: string

  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  onSwitchChange: (value: boolean) => any
}

export default SwitchProps
