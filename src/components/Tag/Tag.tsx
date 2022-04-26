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
  round = false,
  disabled = false,
  icon,
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

    if (onClick && !disabled) onClick(e)
  }

  const del = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation()
    if (!disabled) onDelete(e)
  }

  const onHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof color === 'object') {
      ref.current.style.background = `linear-gradient(
        rgba(0, 0, 0, 0.075),
        rgba(0, 0, 0, 0.075)
      ), ${color.background}`
    }
  }

  const onHoverEnd = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof color === 'object') {
      ref.current.style.background = color.background
    }
  }

  return (
    <div
      data-testid="tag"
      ref={ref}
      onClick={onClick ? click : null}
      tabIndex={disabled ? -1 : !!onClick ? 0 : -1}
      aria-disabled={disabled}
      className={`
        tag-nm 
        color-${color} 
        size-${size} 
        clickable-${!!onClick}
        clicked-${clicked}
        round-${round}
        disabled-${disabled}
        ${className}
      `}
      onMouseOver={onHover}
      onMouseOut={onHoverEnd}
      style={{
        ...colorState,
        ...style,
      }}>
      {icon &&
        (typeof icon === 'string' ? (
          <img className="img-icon-nm" src={icon} />
        ) : (
          icon
        ))}

      {children}

      {onDelete && (
        <DeleteIcon
          data-testid="close-icon"
          className="close-icon-nm"
          onClick={del}
        />
      )}
    </div>
  )
}

export default Tag
