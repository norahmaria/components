import React, { useEffect, useState } from 'react'
import TextInputProps from './TextInput.types'

import { ReactComponent as ErrorIcon } from '../../assets/Error.svg'
import { ReactComponent as WarningIcon } from '../../assets/Warning.svg'

import './TextInput.scss'
import LoadingSpinner from '../../private/LoadingSpinner'

const TextInput = ({
  label,
  placeholder,
  onTextInputChange,
  color = 'primary',
  size = 'medium',
  round = false,
  disabled = false,
  isLoading = false,
  characterLimit = 5,
  status,
  icon,
  id,
}: TextInputProps) => {
  const [value, setValue] = useState('')

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => {
      if (target.value.length > characterLimit) return value
      return characterLimit ? target.value.substring(0, characterLimit) : target.value
    })
  }

  useEffect(() => onTextInputChange(value), [value])

  return (
    <div
      data-testid="text-input-wrapper"
      className={`
        text-input-nm 
        ${status && status.type ? status.type : ''} 
        icon-${!!icon || !!status}
        round-${round}
        color-${color}
        size-${size}
      `}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>

      <div className="text-input-container-nm">
        <input
          disabled={disabled}
          type="text"
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
        />

        {characterLimit && (
          <div className="character-limit-nm">
            <p className="character-count-nm">{value.length}</p> /{' '}
            <p className="character-limit-count-nm">{characterLimit}</p>
          </div>
        )}

        {isLoading ? (
          <LoadingSpinner color={color} />
        ) : status?.type === 'error' ? (
          <ErrorIcon className="error-icon" />
        ) : status?.type === 'warning' ? (
          <WarningIcon className="warning-icon" />
        ) : !!icon ? (
          icon
        ) : null}
      </div>

      {status && (
        <div id="error" className="status">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default TextInput
