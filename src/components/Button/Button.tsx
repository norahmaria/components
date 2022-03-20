import React, { useState } from 'react'
import ButtonProps from './Button.types'
import './Button.scss'

// TODO: Look into adding a lil tooltip box explaining why a btn is disabled
// TODO: Look into attached buttons: https://ant.design/components/button/#components-button-demo-multiple

// FIX: Test passes even if disabled is not working
// FIX: Disabled is not passed properly

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
  isLoading,
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
      className={`${getClasses()} ${clicked ? 'click' : ''} ${
        isLoading ? 'btn-nm-loading' : ''
      }`}
      style={{ width: fullWidth ? '100%' : 'max-content' }}
    >
      {isLoading ? (
        <>
          <div data-testid="btn-loading-icon" className="btn-nm-loading-icon"></div>{' '}
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
