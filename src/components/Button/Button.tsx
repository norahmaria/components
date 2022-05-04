import React, { useEffect, useState } from 'react'
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
  onClick,
  disabled = false,
  style,
  className,
  children,
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const [whiteSpinner, setWhiteSpinner] = useState(
    variant === 'default' && color !== 'neutral'
  )

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isLoading) return

    setClicked(true)
    setTimeout(() => setClicked(false), 500)

    if (onClick) onClick(e)
  }

  useEffect(() => {
    setWhiteSpinner(variant === 'default' && color !== 'neutral')
  }, [variant, color])

  return (
    <button
      style={{ ...style, width: fullWidth ? '100%' : 'max-content' }}
      type={type}
      onClick={onClickHandler}
      disabled={disabled}
      className={`
        btn-nm
        size-${size}
        color-${color}
        variant-${variant}
        clicked-${clicked}
        round-${round}
        icon-${!children && (leftIcon || rightIcon)}
        ${className}
      `}>
      {isLoading ? (
        <LoadingSpinner color={whiteSpinner ? 'white' : color} />
      ) : typeof leftIcon === 'string' ? (
        <img src={leftIcon} alt="" />
      ) : leftIcon ? (
        leftIcon
      ) : null}

      {children}

      {typeof rightIcon === 'string' ? (
        <img src={rightIcon} alt="" />
      ) : rightIcon ? (
        rightIcon
      ) : null}
    </button>
  )
}

export default Button
