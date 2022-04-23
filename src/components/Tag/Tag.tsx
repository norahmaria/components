import React, { useEffect, useRef, useState } from 'react'
import TagProps, { CustomColor } from './Tag.types'
import './Tag.scss'

import { ReactComponent as DeleteIcon } from '../../assets/Close.svg'

const Tag = ({
  size = 'medium',
  color = 'primary',
  className,
  style,
  children,
  onDelete,
}: TagProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [colorState, setColorState] = useState<CustomColor>(
    typeof color === 'object' ? color : null
  )

  useEffect(() => {
    if (typeof color === 'object') {
      setColorState(color)

      const path = ref.current.getElementsByTagName('path')
      if (path[0]) path[0].style.fill = color.color
    } else {
      setColorState(null)
    }
  }, [color])

  return (
    <div
      ref={ref}
      className={`
        tag-nm 
        color-${color} 
        size-${size} 
        ${className}
      `}
      style={{
        ...colorState,
        ...style,
      }}>
      {children}
      {onDelete && <DeleteIcon className="close-icon-nm" onClick={onDelete} />}
    </div>
  )
}

export default Tag
