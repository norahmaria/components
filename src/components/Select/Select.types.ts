import React, { CSSProperties } from 'react'

interface SelectProps {
  multiple?: boolean
  required?: boolean
  disabled?: boolean

  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  status?: {
    type: 'warning' | 'error'
    message: string
  } | null

  label: string
  placeholder: string
  onSelectionChange: (selected: (string | number)[]) => any
  defaultValue?: (string | number)[]
  children?: React.ReactChild | React.ReactChild[] | React.ReactChildren

  className?: string
  style?: CSSProperties
}

export default SelectProps
