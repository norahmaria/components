import React, { CSSProperties } from 'react'

interface RadioProps {
  name: string
  onRadioChange: (
    value: string | number | null,
    e: React.ChangeEvent<HTMLInputElement>
  ) => any
  disabled?: boolean
  horizontal?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  labelPlacement?: 'left' | 'right' | 'top' | 'bottom'
  children: React.ReactChild | React.ReactChild[]
  defaultValue?: string | number

  className?: string
  style?: CSSProperties
}

export default RadioProps
