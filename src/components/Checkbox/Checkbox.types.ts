interface CheckboxProps {
  disabled?: boolean
  label:
    | {
        text: string
        placement?: 'left' | 'right' | 'top' | 'bottom'
      }
    | string
  onCheckboxChange: (checked: boolean) => void
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  round?: boolean
}

export default CheckboxProps
