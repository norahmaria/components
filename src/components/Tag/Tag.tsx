import React from 'react'
import TagProps from './Tag.types'

const Tag = ({ label, disabled, size, color, className, style }: TagProps) => {
  return <div className="tag-nm">{label}</div>
}

export default Tag
