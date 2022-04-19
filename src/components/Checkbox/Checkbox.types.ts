import { CSSProperties } from 'react'

interface CheckboxProps {
  id: string
  disabled?: boolean
  label: string
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  onCheckboxChange: (
    checked: boolean,
    e: React.ChangeEvent<HTMLInputElement> | KeyboardEvent
  ) => any
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  defaultValue?: boolean

  className?: string
  style?: CSSProperties
}

export default CheckboxProps
