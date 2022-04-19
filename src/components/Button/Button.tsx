import React, { useState } from 'react'
import ButtonProps from './Button.types'

import LoadingSpinner from '../../private/LoadingSpinner'

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
  ...props
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) return

    setClicked(true)
    setTimeout(() => setClicked(false), 500)

    if (onButtonClick) onButtonClick(e)
  }

  const left = typeof leftIcon === 'string' ? <img src={leftIcon} /> : leftIcon
  const right = typeof rightIcon === 'string' ? <img src={rightIcon} /> : rightIcon

  return (
    <button
      type={type}
      onClick={click}
      style={{ width: fullWidth ? '100%' : 'max-content' }}
      disabled={disabled}
      className={`
        btn-nm
        size-${size}
        color-${color}
        variant-${variant}
        clicked-${clicked}
        ${!props.children && (leftIcon || rightIcon) ? 'icon' : ''}
        ${round ? 'round' : ''}
      `}>
      {isLoading ? (
        <>
          <LoadingSpinner
            color={variant === 'default' && color !== 'neutral' ? 'white' : color}
          />
          Loading
        </>
      ) : (
        <>
          {leftIcon && left}
          {props.children}
          {rightIcon && right}
        </>
      )}
    </button>
  )
}

export default Button
