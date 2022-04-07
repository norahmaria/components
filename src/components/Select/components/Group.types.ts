import React from 'react'
import OptionProps from './Option.types'

interface GroupProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string
  // children?: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>[]
}

export default GroupProps
