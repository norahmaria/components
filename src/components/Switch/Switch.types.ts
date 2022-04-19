import { CSSProperties } from 'react'

interface SwitchProps {
  label: string
  id: string

  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  onSwitchChange: (
    value: boolean,
    e: React.KeyboardEvent<HTMLLabelElement> | React.ChangeEvent<HTMLInputElement>
  ) => any
  defaultValue?: boolean

  className?: string
  style?: CSSProperties
}

export default SwitchProps
