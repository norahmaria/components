import React from 'react'
import ExtendedOptionProps from './ExtendedOption.types'

import { ReactComponent as CheckMarkIcon } from '../../../../assets/Checkmark.svg'

const ExtendedOption = ({
  onKeyDown,
  onClick,
  selected,
  tabIndex,
  ...props
}: ExtendedOptionProps) => {
  return (
    <li
      role="option"
      aria-disabled={props.disabled}
      className="options-nm__option"
      value={props.value}
      aria-selected={selected}
      onKeyDown={onKeyDown}
      onClick={onClick}
      tabIndex={tabIndex}>
      <div className="options-nm__option-label">
        {typeof props.leftIcon === 'string' ? (
          <img src={props.leftIcon} />
        ) : props.leftIcon ? (
          props.leftIcon
        ) : null}

        {props.children}

        {typeof props.rightIcon === 'string' ? (
          <img src={props.rightIcon} />
        ) : props.rightIcon ? (
          props.rightIcon
        ) : null}
      </div>

      {selected && <CheckMarkIcon className="check-icon-nm" />}
    </li>
  )
}

export default ExtendedOption
