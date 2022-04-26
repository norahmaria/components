import React, { useState } from 'react'
import ButtonProps from './Button.types'

import LoadingSpinner from '../../shared/LoadingSpinner'

import './Button.scss'

const Button = ({
  leftIcon,
  rightIcon,
  round = false,
  size = 'medium',
  fullWidth = false,
  color = 'primary',
  variant = 'default',
  type = 'button',
  isLoading = false,
  onButtonClick,
  disabled,
  style,
  className,
  ...props
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) return

    setClicked(true)
    setTimeout(() => setClicked(false), 500)

    if (onButtonClick) onButtonClick(e)
  }

  return (
    <button
      style={{ ...style, width: fullWidth ? '100%' : 'max-content' }}
      type={type}
      onClick={click}
      disabled={disabled}
      className={`
        btn-nm
        size-${size}
        color-${color}
        variant-${variant}
        clicked-${clicked}
        round-${round}
        ${!props.children && (leftIcon || rightIcon) ? 'icon' : ''}
        ${className}
      `}>
      {isLoading ? (
        <>
          <LoadingSpinner
            color={
              variant === 'default' && color !== 'neutral'
                ? 'white'
                : color
            }
          />
          Loading
        </>
      ) : (
        <>
          {leftIcon &&
            (typeof leftIcon === 'string' ? (
              <img src={leftIcon} alt="" />
            ) : (
              leftIcon
            ))}

          {props.children}

          {rightIcon &&
            (typeof rightIcon === 'string' ? (
              <img src={rightIcon} alt="" />
            ) : (
              rightIcon
            ))}
        </>
      )}
    </button>
  )
}

export default Button
