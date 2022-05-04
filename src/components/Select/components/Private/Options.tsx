import React from 'react'
import Group from '../Group'
import ExtendedOption from './ExtendedOption'
import OptionsProps from './Options.types'

const Options = ({
  selected,
  updateSelected,
  onKeyDown,
  multiple,
  setOpen,
  children,
}: OptionsProps) => {
  const extendProps = (value: string | number, disabled?: boolean) => {
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
    <>
      {React.Children.map(children, child =>
        child.props.title ? (
          <Group {...child.props}>
            {React.Children.map(child.props.children, nested => (
              <ExtendedOption
                {...nested.props}
                {...extendProps(nested.props.value, nested.props.disabled)}
              />
            ))}
          </Group>
        ) : (
          <ExtendedOption
            {...child.props}
            {...extendProps(child.props.value, child.props.disabled)}
          />
        )
      )}
    </>
  )
}

export default Options
