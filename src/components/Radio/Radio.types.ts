import React from 'react'

interface RadioProps {
  name: string
  onRadioChange: (value: string | number | null) => any
  disabled?: boolean
  horizontal?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactChild | React.ReactChild[]
}

export default RadioProps
