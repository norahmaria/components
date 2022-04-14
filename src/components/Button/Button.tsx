import React, { useState } from 'react'
import ButtonProps from './Button.types'

import LoadingSpinner from '../../private/LoadingSpinner'

import './Button.scss'

// Consider:
// -- Adding a lil tooltip box explaining why a btn is disabled
// -- Adding attached buttons: https://ant.design/components/button/#components-button-demo-multiple

const Button = ({
  leftIcon,
  rightIcon,
  round = false,
  size = 'medium',
  fullWidth = false,
  color = 'primary',
  variant = 'default',
  className,
  onClick,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) return

    setClicked(true)
    setTimeout(() => setClicked(false), 500)

    if (onClick) onClick(e)
  }

  const getClasses = () => {
    const classes = ['btn-nm', size, color, variant]

    if (!props.children && (leftIcon || rightIcon)) classes.push('icon')
    if (className) classes.push(className)
    if (round) classes.push('round')

    return classes.join(' ')
  }

  const left = typeof leftIcon === 'string' ? <img src={leftIcon} /> : leftIcon
  const right = typeof rightIcon === 'string' ? <img src={rightIcon} /> : rightIcon

  return (
    <button
      {...props}
      onClick={click}
      className={`${getClasses()} clicked-${clicked} loading-${isLoading}`}
      style={{ width: fullWidth ? '100%' : 'max-content' }}>
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
