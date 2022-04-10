import React from 'react'

import ChildrenProps from './Children.types'

const Children = ({
  children,
  name,
  size = 'medium',
  color = 'primary',
  onChange,
  labelPlacement = 'right',
  disabled,
}: ChildrenProps) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange,
      size,
      color,
      labelPlacement,
      disabled: disabled ? true : child.props.disabled,
    })
  })
}

export default Children
