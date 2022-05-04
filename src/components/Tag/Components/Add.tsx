import React, { useState } from 'react'
import AddProps from './Add.types'

import { ReactComponent as AddIcon } from '../../../assets/Add.svg'

import './Add.scss'
import LoadingSpinner from '../../../shared/LoadingSpinner'
import CharacterLimit from '../../../shared/CharacterLimit'

const Add = ({
  placeholder,
  onAdd,
  color = 'primary',
  size = 'medium',
  round = false,
  disabled = false,
  isLoading = false,
  characterLimit,
  id,
  className,
  style,
}: AddProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => {
      const update =
        characterLimit && e.target.value.length > characterLimit
          ? value
          : characterLimit
          ? e.target.value.substring(0, characterLimit)
          : e.target.value

      return update
    })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd({ value, id })
      setValue('')
    }
  }

  return (
    <div
      data-testid="add-tag-wrapper"
      className={`
        add-tag-nm 
        round-${round}
        color-${color}
        size-${size}
        character-limit-${!!characterLimit}
        ${className}
      `}>
      <div
        className={`
          add-tag-nm__container
          disabled-${disabled} 
        `}>
        {isLoading ? (
          <LoadingSpinner color={color} />
        ) : (
          <AddIcon className="plus-icon-nm" />
        )}

        <input
          data-testid="add-input"
          id={id}
          autoComplete="off"
          disabled={disabled}
          value={value}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          onChange={onChange}
          style={{
            ...style,
            width: `calc(${
              value.length ? value.length : placeholder.length
            }ch + 2.5rem)`,
          }}
          className={`
            input-base-nm 
            color-${color} 
            size-${size}
          `}
        />

        {characterLimit && (
          <CharacterLimit value={value} characterLimit={characterLimit} />
        )}
      </div>
    </div>
  )
}

export default Add
