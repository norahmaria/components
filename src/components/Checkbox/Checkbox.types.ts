interface CheckboxProps {
  id: string
  disabled?: boolean
  label: string
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  onCheckboxChange: (checked: boolean) => void
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
}

export default CheckboxProps
