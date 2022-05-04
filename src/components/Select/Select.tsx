import React from 'react'
import './Select.scss'

import useSelect from './hooks/useSelect'

import Button from './Components/Private/Button'
import Options from './Components/Private/Options'

import SelectProps from './Select.types'

const Select = ({
  multiple = false,
  required = false,
  disabled = false,
  label,
  placeholder,
  onChange,
  status,
  defaultValue = [],
  size = 'medium',
  color = 'primary',
  className,
  style,
  id,
  ...props
}: SelectProps) => {
  const {
    onKeyDown,
    setSelected,
    selected,
    setOpen,
    updateSelected,
    container,
    open,
    clear,
  } = useSelect({
    defaultValue,
    multiple,
    onChange,
    id,
  })

  const extendedProps = (value: string | number, disabled?: boolean) => {
    return {
      tabIndex: disabled ? -1 : open ? (disabled ? -1 : 0) : -1,
      selected: selected.includes(value),
      onKeyDown: onKeyDown(value),
      onClick: () => {
        if (!disabled) {
          updateSelected(value)
          if (!multiple) setOpen(false)
        }
      },
    }
  }

  return (
    <div
      data-testid="select"
      ref={container}
      style={style}
      className={`
        select-nm 
        size-${size} 
        color-${color} 
        ${status && status.type ? status.type : ''} 
        ${className}
      `}>
      <label className={`form-label-nm disabled-${disabled}`}>{label}</label>

      <Button
        color={color}
        isOpen={open}
        multiple={multiple}
        selected={selected}
        disabled={disabled}
        status={status}
        size={size}
        placeholder={placeholder}
        labelChildren={props.children}
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={e => (e.key === 'Backspace' ? setSelected([]) : () => {})}
        clear={clear}
      />

      <ul
        className={`options-nm open-${open}`}
        role="listbox"
        aria-label={label}
        aria-multiselectable={multiple}
        aria-activedescendant={selected[selected.length]?.toString()}
        tabIndex={-1}>
        {React.Children.count(props.children) ? (
          <Options
            selected={selected}
            updateSelected={updateSelected}
            onKeyDown={onKeyDown}
            multiple={multiple}
            setOpen={setOpen}
            children={props.children}
          />
        ) : (
          <div>No selects</div>
        )}
      </ul>

      {status && (
        <div id="error" className="status-nm">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default Select
