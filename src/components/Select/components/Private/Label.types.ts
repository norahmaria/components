import React from 'react'

interface LabelProps {
  children: React.ReactNode
  multiple: boolean
  selected: (string | number)[]
  label: string
}

export default LabelProps
