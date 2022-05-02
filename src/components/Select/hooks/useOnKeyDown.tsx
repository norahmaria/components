import React from 'react'

interface useOnKeyDownProps {
  updateSelected: (value: number | string) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelected: React.Dispatch<React.SetStateAction<(string | number)[]>>
  multiple: boolean
}

const useOnKeyDown = ({
  updateSelected,
  setOpen,
  setSelected,
  multiple,
}: useOnKeyDownProps) => {
  return (value: number | string) =>
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          e.preventDefault()
          updateSelected(value)
          if (!multiple) setOpen(false)
          break
        case 'Escape':
          setOpen(false)
          break
        case 'Backspace':
          setSelected([])
          break
        default:
          break
      }
    }
}

export default useOnKeyDown
