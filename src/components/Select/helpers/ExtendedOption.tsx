import React from 'react'
import ExtendedOptionProps from './ExtendedOption.types'

import { ReactComponent as CheckMarkIcon } from '../../../assets/Checkmark.svg'

const ExtendedOption = ({
  onKeyDown,
  onClick,
  selected,
  tabIndex,
  ...props
}: ExtendedOptionProps) => {
  const left =
    typeof props.leftIcon === 'string' ? <img src={props.leftIcon} /> : props.leftIcon

  const right =
    typeof props.rightIcon === 'string' ? <img src={props.rightIcon} /> : props.rightIcon

  return (
    <li
      role="option"
      aria-disabled={props.disabled}
      className="option"
      value={props.value}
      aria-selected={selected}
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={tabIndex}>
      <div className="label">
        {props.leftIcon && left}
        {props.children}
        {props.rightIcon && right}
      </div>

      {selected && <CheckMarkIcon className="check-icon" />}
    </li>
  )
}

export default ExtendedOption
