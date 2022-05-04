import React, { ReactNode } from 'react'

interface OptionsProps {
  selected: (string | number)[]
  updateSelected: (value: number | string) => void
  onKeyDown: (
    value: string | number
  ) => (e: React.KeyboardEvent<HTMLLIElement>) => void
  multiple: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: any
}

export default OptionsProps
