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
  onClick,
}: TagProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)
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

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    setClicked(true)
    setTimeout(() => setClicked(false), 500)

    if (onClick) onClick(e)
  }

  const del = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    onDelete(e)
  }

  return (
    <div
      ref={ref}
      onClick={onClick ? click : null}
      tabIndex={!!onClick ? 0 : -1}
      className={`
        tag-nm 
        color-${color} 
        size-${size} 
        clickable-${!!onClick}
        clicked-${clicked}
        ${className}
      `}
      style={{
        ...colorState,
        ...style,
      }}>
      {children}
      {onDelete && <DeleteIcon className="close-icon-nm" onClick={del} />}
    </div>
  )
}

export default Tag
