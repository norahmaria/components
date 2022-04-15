import React from 'react'

interface LabelProps {
  children: React.ReactNode
  multiple: boolean
  selected: (string | number)[]
  label: string
  placeholder: string
}

export default LabelProps
