import React, { useEffect, useState } from 'react'
import TextInputProps from './TextInput.types'

import { ReactComponent as ErrorIcon } from '../../assets/Error.svg'
import { ReactComponent as WarningIcon } from '../../assets/Warning.svg'
import { ReactComponent as CloseIcon } from '../../assets/Close.svg'

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
  characterLimit,
  status,
  icon,
  id,
}: TextInputProps) => {
  const [value, setValue] = useState('')
  const [hover, setHover] = useState(false)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => {
      const update =
        characterLimit && target.value.length > characterLimit
          ? value
          : characterLimit
          ? target.value.substring(0, characterLimit)
          : target.value

      onTextInputChange(update)
      return update
    })
  }

  const clear = () => setValue('')

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

      <div
        className="text-input-container-nm"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <input
          data-testid="text-input"
          autoComplete="off"
          disabled={disabled}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
        />
        {isLoading ? (
          <LoadingSpinner color={color} />
        ) : value.length && hover ? (
          <CloseIcon
            data-testid="close-icon"
            role="button"
            aria-label="Clear selected"
            className="close-icon"
            onClick={clear}
          />
        ) : status?.type === 'error' ? (
          <ErrorIcon aria-label={status.message} className="error-icon" />
        ) : status?.type === 'warning' ? (
          <WarningIcon aria-label={status.message} className="warning-icon" />
        ) : !!icon ? (
          icon
        ) : null}
      </div>

      {characterLimit && (
        <div className="character-limit-nm">
          <p className="character-count-nm">{value.length}</p> /{' '}
          <p className="character-limit-count-nm">{characterLimit}</p>
        </div>
      )}

      {status && (
        <div id="error" className="status">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default TextInput
