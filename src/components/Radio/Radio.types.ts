import React from 'react'

interface CheckboxProps {
  name: string
  onRadioChange: (value: string | number | null) => any
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactChild | React.ReactChild[]
  disabled?: boolean
  horizontal?: boolean
}

export default CheckboxProps
