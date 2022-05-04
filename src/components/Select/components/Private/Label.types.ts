import React from 'react'

interface LabelProps {
  children: React.ReactNode
  multiple: boolean
  selected: (string | number)[]
  placeholder: string
}

export default LabelProps
